/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { el, PressinoUI, LinkFormat, VisibilityOptions } from '../../pressino-ui';

var classSpecs = {
    boolean: ['floating', 'compact'],
    string: ['color','size', 'attached', 'margin', 'padding']
}
function getClass(theAtts, theIsEditMode) {
    //--- Added clearing so that content stays inside, no logical reason to use it other ways
    var tmpClasses = PressinoUI.getStandardClass('ui message', classSpecs, theAtts, theIsEditMode);
    
    if( theAtts.classes ){
        tmpClasses = tmpClasses.trim().replace('  ',' ') + ' ' + theAtts.classes;
    }
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
        return el('div',tmpProps, <InnerBlocks />);
    }

    return el('div',tmpProps, <InnerBlocks.Content />);
}