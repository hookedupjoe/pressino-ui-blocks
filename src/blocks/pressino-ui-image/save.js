/**
 * HTML To Save
 */
import { useBlockProps } from '@wordpress/block-editor';
import display from './display';

export default function save( { props, attributes } ) {
    const blockProps = useBlockProps.save();
    var tmpDisplay = display({props, attributes, editMode: false});
    return (
        <div { ...blockProps }>
           {tmpDisplay}
        </div>
    );
}