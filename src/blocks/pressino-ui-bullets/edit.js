/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { istr, PressinoUI, el, attNamesIcon, LinkFormat } from '../../pressino-ui';
import { BlockControls } from '@wordpress/block-editor';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;

import display from './display';

import { useState } from '@wordpress/element';

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var tmpDisplayObject = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { bullettype, iconname} = attributes;

    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    props.attributes.parentColor = tmpParentAttributes.color || '';
    props.attributes.parentMaxImgHeight = tmpParentAttributes.imageheight || 0;
    props.attributes.parentHeaderType = tmpParentAttributes.headertype || 'default';
   
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);

    const { clientId } = props;
    const tmpChildren = useSelect(
        (select) => select(blockEditorStore).getBlock(clientId).innerBlocks,
    );

    let tmpSidebarControls = <InspectorControls>
        <PanelBody title={istr('General Settings')}>
            {PressinoUI.getStandardProperty(props, 'bulletsize', "Bullet Size", 'basicsizes')}
            {PressinoUI.getStandardProperty(props, 'bullettype', "Bullet Type", 'bulletnames')}
            {(bullettype == 'icon' && PressinoUI.getSettingsForIcon({ label: (iconname) ? 'Change Icon' : 'Select Icon', attname: attNamesIcon, isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen, attributes, setAttributes }))}
            {(bullettype == 'none' && PressinoUI.getStandardProperty(props, 'flat', "Flatten", 'checkbox'))}
            {PressinoUI.getStandardProperty(props, 'bulletcolor', 'Bullet Color', 'colors')}
            {PressinoUI.getStandardProperty(props, 'bulletspacing', 'Spacing Between Bullets', 'bulletspacing')}
            {PressinoUI.getStandardProperty(props, 'textsize', "Text Size", 'basicsizes')}
        </PanelBody>

        {LinkFormat.getSettings(props)}

        <PanelBody title={istr('Advanced Settings')}>
            {PressinoUI.getStandardProperty(props, 'classes', "Additional CSS Class(es)", 'text')}
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
