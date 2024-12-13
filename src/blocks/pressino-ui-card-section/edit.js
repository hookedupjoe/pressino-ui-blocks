/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    //const {  } = attributes;

    var tmpEditorClass = '';
    tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if( props.isSelected ){
        tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }
    tmpContent.push( tmpDisplay );

   
    if( attributes.extra && props.isSelected ){
        // tmpContent.push(el('div', {className: 'ui label brown basic fluid pointing up center aligned'}, 'Bottom Area: Optional'));

        var tmpAddBtn = '';
        var tmpBtnBar = ''
        
            tmpAddBtn = el('div', { className: 'ui compact button basic brown ', elementname: 'bottomattachedbutton', action: 'beAddElement' }, 'Add Button');
            tmpAddMsg = el('div', { className: 'ui compact button basic brown ', elementname: 'bottomattachedmessage', action: 'beAddElement' }, 'Add Message');
            tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
                tmpAddBtn, tmpAddMsg
            ], el('div', { className: 'endfloat' }));
            tmpUIColor = 'brown';
        
        var tmpFooter = el('div', { className: 'ui header top attached center aligned fluid ' + 'brown' }, el('div', {className: 'ui label brown basic fluid pointing up center aligned'}, 'Bottom Area: Optional'), tmpBtnBar);
        tmpContent.push(tmpFooter);
        
    }



    return <>
        <InspectorControls>

            <PanelBody title={istr('Formatting Options')}>
            {PressinoUI.getStandardProperty(theProps, 'padding', "Padding", 'padding')}
            {PressinoUI.getStandardProperty(theProps, 'margin', "Margin", 'margin')}
            {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
            </PanelBody>


        </InspectorControls>
        <div {...blockProps}>
            {tmpContent}
        </div>
    </>

}
