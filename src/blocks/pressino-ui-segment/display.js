import { InnerBlocks } from '@wordpress/block-editor';
import {PressinoUI} from '../../pressino-ui';

var classSpecs = {
	boolean: ['raised', 'stacked', 'vertical', 'basic', 'clearing', 'inverted', 'margin', 'padding'],
	string: ['color', 'size', 'attached', 'alignment']
}

function getClass(theAtts, theIsEditMode) {
	return PressinoUI.getStandardClass('ui segment', classSpecs, theAtts, theIsEditMode);
}

export default function display({ attributes, editMode }) {

    let classNames = getClass(attributes,editMode);
   
    if(editMode === true){
        return (
            <div className={classNames} >
                <InnerBlocks />
            </div>
        );
    }

    return (
        <div className={classNames} >
            <InnerBlocks.Content />
        </div>
    );
}