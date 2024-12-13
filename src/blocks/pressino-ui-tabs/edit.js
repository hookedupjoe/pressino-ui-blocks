/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, el, PressinoUI } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    var props = theProps;
    //---

    var tmpAtts = props.attributes;
    if( !(tmpAtts.groupname) ){
        tmpAtts.groupname = PressinoUI.getRandomID();
    }
     //console.log('tmpAtts.groupname',tmpAtts.groupname);
   
    return <>
        <InspectorControls>

<PanelBody title={istr('General Settings')}>
    {PressinoUI.getStandardProperty(theProps, 'groupname', 'Group Name', 'text')}
    {PressinoUI.getStandardProperty(theProps, 'color', 'Tabs Color', 'colors')}
    {PressinoUI.getStandardProperty(theProps, 'inverted', 'Inverted', 'checkbox')}
    {PressinoUI.getStandardProperty(theProps, 'labelpadding', 'Label Padding', 'slimwidespacing')}
    {PressinoUI.getStandardProperty(theProps, 'bodyonly', 'Exclude the tabs?', 'checkbox')}
</PanelBody>

<PanelBody title={istr('Formatting Options')}>
    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
</PanelBody>

{/* var tmpStandardProperties = [
BlockEditor.getStandardProperty(props, 'groupname', 'Group Name', 'text'),
BlockEditor.getStandardProperty(props, 'color', 'Tabs Color', 'color'),
BlockEditor.getStandardProperty(props, 'inverted', 'Inverted', 'checkbox'),
BlockEditor.getStandardProperty(props, 'labelpadding', 'Label Padding', 'slimwidespacing'),
BlockEditor.getStandardProperty(props, 'bodyonly', 'Exclude the tabs?', 'checkbox'),
];

var tmpFormatProperties = [
BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
];

var tmpSidebarPanels = [
BlockEditor.getSidebarPanel('Columns Container Options', tmpStandardProperties),
BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
]; */}

</InspectorControls>
<div {...blockProps}>
{tmpDisplay}
</div>
</>

}
