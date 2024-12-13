/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI } from '../../pressino-ui';

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