/**
 * HTML To Save
 */
import display from './display';

export default function save( { attributes } ) {
    var tmpDisplay = display({attributes, editMode: false});
    //--- Not using blockprops with extra div, causes css issues
    return tmpDisplay;
}