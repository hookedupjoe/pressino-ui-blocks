import { useBlockProps } from '@wordpress/block-editor';
import display from './display';

export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    var tmpDisplay = display({attributes, editMode: false});
    return (

        <div { ...blockProps }>
           {tmpDisplay}
        </div>
    );
}