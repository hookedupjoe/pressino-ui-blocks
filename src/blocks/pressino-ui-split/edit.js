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
    const { splitratio } = attributes;
    var props = theProps;
    
    if( !(splitratio) ){
        setAttributes({splitratio:'5'})
    }

    const onAddBlock = () => {
        PressinoUI.addBlock({ blockName: 'pressino/splitcolumn', blockOptions: {
            extra: true,
            padding: 'pad0'
        } })
    }


    const { clientId } = props;
    const tmpChildren = useSelect(
        (select) => select(blockEditorStore).getBlock(clientId).innerBlocks,
    );

    var tmpHasMaxBlocks = false;
    if (tmpChildren.length > 1) {
        tmpHasMaxBlocks = true;
    }
    let tmpSidebarControls = <InspectorControls>
  
        <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'splitratio', 'Split Ratio', 'splitlevels',true)}
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
