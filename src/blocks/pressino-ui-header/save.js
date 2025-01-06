/**
 * HTML To Save
 */
import display from './display';

export default function save( { attributes } ) {
    var tmpDisplay = display({attributes, editMode: false});
    return tmpDisplay;
}