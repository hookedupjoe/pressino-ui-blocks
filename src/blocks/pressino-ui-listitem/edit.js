/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import { BlockControls } from '@wordpress/block-editor';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;

import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplayObject = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    var props = theProps;
    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    var tmpParentRefresh = false;

    if( props.attributes.parentbulletcolor != tmpParentAttributes.bulletcolor){
        tmpParentRefresh = true;
    }
    var tmpList = ['iconname','icontype','bullettype','bulletcolor','bulletsize'];

    tmpList.forEach( theName => {
        if( props.attributes['parent'+theName] != tmpParentAttributes[theName]){
            tmpParentRefresh = true;
            props.attributes['parent'+theName] = tmpParentAttributes[theName] || '';
        }
    })

    
    // props.attributes.parenticonname = tmpParentAttributes.iconname || '';
    // props.attributes.parenticontype = tmpParentAttributes.icontype || '';
    // props.attributes.parentbullettype = tmpParentAttributes.bullettype || '';
    // props.attributes.parentbulletcolor = tmpParentAttributes.bulletcolor || '';
    // props.attributes.parentbulletsize = tmpParentAttributes.bulletsize || '';

    if(tmpParentRefresh){
        PressinoUI.refreshBlockEditor();
    }

//    console.log('props.attributes',props.attributes)

    const onAddBlock = () => {
        PressinoUI.addBlock({ blockName: 'pressino/listitemsection' }, {
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

    if (!tmpHasMaxBlocks) {
        tmpToolbarMods = <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon={PressinoUI.getBlockIcon('pressino/listitemsection')}
                    label="Add Floater"
                    text="Add Floater"
                    onClick={onAddBlock}
                />
            </ToolbarGroup>
        </BlockControls>
    }

    let tmpSidebarControls = <InspectorControls>
        {tmpToolbarMods}


        {/* <PanelBody title={istr('General Settings')}>
            {PressinoUI.getStandardProperty(theProps, 'raised', 'Raised', 'checkbox')}
            {PressinoUI.getStandardProperty(theProps, 'headerColor', 'Header Color', 'colors')}

        </PanelBody> */}


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
