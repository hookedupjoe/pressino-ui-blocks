/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
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
    //---
    var tmpAtts = props.attributes;


    //ToDo: Add refresh option for itemname and label **
    let tmpSidebarControls = <InspectorControls>

        <PanelBody title={istr('General Settings')}>
            {PressinoUI.getStandardProperty(theProps, 'centered', 'Centered', 'checkbox')}
            {PressinoUI.getStandardProperty(theProps, 'flexgrowbox', 'Fill column with first item?', 'checkbox')}
        </PanelBody>

        <PanelBody title={istr('Formatting Options')}>
            {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
        </PanelBody>
    </InspectorControls>

    var tmpEditorClass = '';
    tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if (props.isSelected) {
        tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    var tmpTabPrefix = el('div', { className: 'ui label grey' }, 'Grid Column');
    var tmpEditHeader = el('div', { className: "ui message bolder center aligned pad8 grey small" }, tmpTabPrefix);



    var tmpRetEl = el(
        'div',
        {},
        [
            tmpSidebarControls,
            tmpDisplayObject
        ]
    )
   
    return <div {...blockProps}>
        {[tmpEditHeader, tmpRetEl]}
    </div>

}
