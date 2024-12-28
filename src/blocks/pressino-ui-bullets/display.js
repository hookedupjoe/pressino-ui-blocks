/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: [],
	string: ['classes'],
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('', classSpecs, theAtts, theIsEditMode);
	return tmpClasses
}


export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpClass = getClass(props.attributes, true);
    var tmpProps = {className: tmpClass, appuse:'iconlist'};

    if (editMode) {
       
        return el('div', tmpProps, el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['core/list'], renderAppender: false }));
    } else {
        
        return el('div', tmpProps, el(wp.blockEditor.InnerBlocks.Content));
    }
   

}