/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
import { InnerBlocks } from '@wordpress/block-editor';

var classSpecs = {
    boolean: ['extra'],
	string: ['padding','margin']
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
                <InnerBlocks renderAppender = {wp.blockEditor.InnerBlocks.DefaultBlockAppender} />
            </div>
        );
    }

    return (
        <div className={classNames} >
            <InnerBlocks.Content />
        </div>
    );
}