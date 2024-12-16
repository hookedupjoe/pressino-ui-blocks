/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, el, PressinoUI } from '../../pressino-ui';
import display from './display';

import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { addCard } from '@wordpress/icons';

function onChangeAlignment(){
    alert('onChangeAlignment')
}
/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    var props = theProps;
 
    const onAddCard = () => {
        PressinoUI.addBlock({blockName: 'card'})
    }

    var tmpAtts = props.attributes;
    if( !(tmpAtts.groupname) ){
        tmpAtts.groupname = PressinoUI.getRandomID();
    }
   
    return <>
    <div {...blockProps}>

    <BlockControls>
                <ToolbarGroup>
                <ToolbarButton
						icon={ addCard }
						label="Add Card"
                        text="Add Card"
						onClick={ onAddCard }
					/>
                </ToolbarGroup>
            </BlockControls>
        
        <InspectorControls>

<PanelBody title={istr('General Settings')}>
    {PressinoUI.getStandardProperty(theProps, 'columns', 'Columns', 'columns')}
    {PressinoUI.getStandardProperty(theProps, 'mincolwidth', 'Min Column Width', 'number')}


    {PressinoUI.getStandardProperty(theProps, 'cardspacing', 'Space Between Cards', 'slimwidespacing')}
    {PressinoUI.getStandardProperty(theProps, 'imageheight', 'Cards Image Height', 'number', true)}
    {PressinoUI.getStandardProperty(theProps, 'color', 'Cards Color', 'colors')}
    {PressinoUI.getStandardProperty(theProps, 'headertype', 'Header Type', 'inverted', true)}

    {PressinoUI.getStandardProperty(theProps, 'centered', 'Centered', 'checkbox')}
</PanelBody>


</InspectorControls>

{tmpDisplay}
</div>
</>

}
