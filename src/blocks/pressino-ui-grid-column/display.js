/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: ['centered','flexgrowbox'],
    string: []
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui column', classSpecs, theAtts, theIsEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpContent = [];
    var tmpClass = getClass(props, editMode);
    if( editMode ){
        tmpClass += ' fluid';
    }
  
    if( tmpAtts.classes ){
        tmpClass += ' ' + tmpAtts.classes;
    }

    if (editMode) {
        tmpContent.push(el(wp.blockEditor.InnerBlocks,{}));
    } else {
        tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
    }

    var tmpExtraContent = [];
   
    tmpContent.push(tmpExtraContent);

    // if (editMode) {
    //     return el('div', { className: tmpClass }, tmpContent);
    // }

    return el('div', { className: tmpClass }, tmpContent);
    
}