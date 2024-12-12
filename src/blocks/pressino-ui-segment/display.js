import { InnerBlocks } from '@wordpress/block-editor';

export default function display({ attributes, editMode }) {
    let classNames = 'ui segment';
    window.debugDispEdit = editMode;
    if( attributes.raised == true ){
        classNames += ' raised';
    }

   
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