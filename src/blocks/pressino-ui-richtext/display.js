/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

var classSpecs = {
    boolean: [],
    string: ['classes']
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('', classSpecs, theAtts, theIsEditMode);
    return tmpClasses
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