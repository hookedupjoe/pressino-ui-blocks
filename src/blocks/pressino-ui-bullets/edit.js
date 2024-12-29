/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { istr, PressinoUI, el, attNamesIcon } from '../../pressino-ui';
import { BlockControls } from '@wordpress/block-editor';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;

import display from './display';

import { useState } from '@wordpress/element';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplayObject = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { bullettype, iconname} = attributes;
    var props = theProps;
    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    props.attributes.parentColor = tmpParentAttributes.color || '';
    props.attributes.parentMaxImgHeight = tmpParentAttributes.imageheight || 0;
    props.attributes.parentHeaderType = tmpParentAttributes.headertype || 'default';
   
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);

    const onAddBlock = () => {
        PressinoUI.addBlock({ blockName: 'pressino/cardsection' }, {
            extra: true,
            padding: 'pad0'
        })
    }


    const { clientId } = props;
    const tmpChildren = useSelect(
        (select) => select(blockEditorStore).getBlock(clientId).innerBlocks,
    );

    var tmpHasMaxBlocks = false;
    if (tmpChildren.length > 1) {
        tmpHasMaxBlocks = true;
    }

    var tmpToolbarMods = '';

    let tmpSidebarControls = <InspectorControls>
        {tmpToolbarMods}
    
        <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'bulletsize', "Bullet Size", 'basicsizes')}
        {PressinoUI.getStandardProperty(theProps, 'bullettype', "Bullet Type", 'bulletnames')}
        {(bullettype == 'icon' && PressinoUI.getSettingsForIcon({ label: (iconname) ? 'Change Icon' : 'Select Icon', attname: attNamesIcon, isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen, attributes, setAttributes }))}
        {(bullettype == 'none' && PressinoUI.getStandardProperty(theProps, 'flat', "Flatten", 'checkbox'))}
        {PressinoUI.getStandardProperty(theProps, 'bulletcolor', 'Bullet Color', 'colors')}
        {PressinoUI.getStandardProperty(theProps, 'bulletspacing', 'Spacing Between Bullets', 'bulletspacing')}
        {PressinoUI.getStandardProperty(theProps, 'textsize', "Text Size", 'basicsizes')}
        
        </PanelBody>

        <PanelBody title={istr('Advanced Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}

        </PanelBody>


    </InspectorControls>


    var tmpEditorClass = '';
    tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if (props.isSelected) {
        tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    var tmpRetEl = el(
        'div',
        { className: tmpEditorClass },
        [

            tmpSidebarControls,
            tmpDisplayObject
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>

}
