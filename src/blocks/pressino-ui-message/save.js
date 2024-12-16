/**
 * HTML To Save
 */
import { useBlockProps } from '@wordpress/block-editor';
import display from './display';

export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    var tmpDisplay = display({attributes, editMode: false});
    //--- Not using blockprops with extra div, causes css issues
    return tmpDisplay;
}