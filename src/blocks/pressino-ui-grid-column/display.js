/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: ['centered','flexgrowbox'],
    string: []
}


function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui column', classSpecs, attributes, isEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
    var { attributes, setAttributes } = props;
    const { classes, centered, flexgrowbox} = attributes;

    var tmpContent = [];
    var tmpClass = getClass(attributes, editMode);

    if( editMode ){
        tmpClass += ' fluid';
    }
  
    if( classes ){
        tmpClass += ' ' + classes;
    }

    if (editMode) {
        tmpContent.push(el(wp.blockEditor.InnerBlocks,{}));
    } else {
        tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
    }

    var tmpExtraContent = [];
   
    tmpContent.push(tmpExtraContent);

    return el('div', { className: tmpClass }, tmpContent);
    
}