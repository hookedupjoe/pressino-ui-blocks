/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, LinkFormat, VisibilityOptions, el } from '../../pressino-ui';

var classSpecs = {
	boolean: ['raised', 'stacked', 'vertical', 'basic', 'inverted'],
	string: ['color', 'size', 'attached', 'alignment', 'padding']
}

function getClass(theAtts, theIsEditMode) {
    //--- Added clearing so that content stays inside, no logical reason to use it other ways
    var tmpClasses = PressinoUI.getStandardClass('ui segment clearing', classSpecs, theAtts, theIsEditMode);
    
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