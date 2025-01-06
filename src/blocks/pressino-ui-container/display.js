/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, LinkFormat, VisibilityOptions, el } from '../../pressino-ui';
import { InnerBlocks } from '@wordpress/block-editor';

var classSpecs = {
    boolean: [],
    string: ['classes']
}

function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('', classSpecs, attributes, isEditMode);
    return tmpClasses
}

export default function display({ attributes, editMode }) {

    let classNames = getClass(attributes,editMode);
  
    var tmpLinkFormats = LinkFormat.getDisplayInfo({attributes});
    classNames += ' ' + tmpLinkFormats?.className || '';
    var tmpVisOptions = VisibilityOptions.getDisplayInfo({attributes,editMode});
    classNames += ' ' + tmpVisOptions?.className || '';
    classNames = classNames.trim();
    
    var tmpProps = {className: classNames};
    if( tmpLinkFormats?.domAtts?.linkformat ){
        tmpProps = {...tmpProps,...tmpLinkFormats.domAtts}
    }

    if(editMode === true){
        return (el('div',tmpProps, <InnerBlocks />));
    }

    var tmpContent = [el('div',tmpProps, <InnerBlocks.Content />)];
    tmpContent.push(el('div',{style:'clear:both'}, ''));

    return (tmpContent);

}