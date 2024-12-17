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
    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    props.attributes.parentColor = tmpParentAttributes.color || '';
    props.attributes.parentMaxImgHeight = tmpParentAttributes.imageheight || 0;
    props.attributes.parentHeaderType = tmpParentAttributes.headertype || 'default';

    let tmpSidebarControls = <InspectorControls>

    <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'title', 'Card Title', 'text') } 
        {PressinoUI.getStandardProperty(theProps, 'subtitle', 'Sub Title', 'text')} 
        {PressinoUI.getStandardProperty(theProps, 'color', 'Card Color', 'colors')} 
        {PressinoUI.getStandardProperty(theProps, { mediaID: 'mediaID', mediaURL: 'mediaURL' }, 'Card Image', 'image')}
        {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')} 
        {PressinoUI.getStandardProperty(theProps, 'urlopentab', 'Open link in new tab?', 'checkbox')} 
        {PressinoUI.getStandardProperty(theProps, 'title', 'fluid', 'Full width', 'checkbox')} 
        {PressinoUI.getStandardProperty(theProps, 'raised', 'Raised', 'checkbox')} 
        {PressinoUI.getStandardProperty(theProps, 'headerColor', 'Header Color', 'colors')} 
        
    </PanelBody>


</InspectorControls>


    var tmpEditorClass = '';
    tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if( props.isSelected ){
        tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    var tmpRetEl = el(
        'div',
        {className: tmpEditorClass},
        [
          
            tmpSidebarControls,
            tmpDisplayObject
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>

}