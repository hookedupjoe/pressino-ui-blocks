/**
 * HTML To Save
 */
import display from './display';

export default function save( { props, attributes } ) {
    var tmpDisplay = display({props, attributes, editMode: false});
    return tmpDisplay;
}