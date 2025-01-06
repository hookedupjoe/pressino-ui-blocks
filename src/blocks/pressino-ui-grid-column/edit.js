/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes } = props;
    var tmpDisplayObject = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();

    //ToDo: Add refresh option for itemname and label **
    let tmpSidebarControls = <InspectorControls>

        <PanelBody title={istr('General Settings')}>
            {PressinoUI.getStandardProperty(props, 'centered', 'Centered', 'checkbox')}
            {PressinoUI.getStandardProperty(props, 'flexgrowbox', 'Fill column with first item?', 'checkbox')}
        </PanelBody>

        <PanelBody title={istr('Formatting Options')}>
            {PressinoUI.getStandardProperty(props, 'classes', "Additional CSS Class(es)", 'text')}
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
