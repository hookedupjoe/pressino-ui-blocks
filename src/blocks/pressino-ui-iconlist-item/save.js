/**
 * HTML To Save
 */
import display from './display';

export default function save( props ) {
    var tmpDisplay = display({props, attributes: props.attributes, editMode: false});
    //--- IMPORTANT - Do not included props, must be direct
    return tmpDisplay;
}