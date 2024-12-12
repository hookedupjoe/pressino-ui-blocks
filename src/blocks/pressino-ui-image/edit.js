/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, attNamesDef } from '../../pressino-ui';
import display from './display';


/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var theProps = props;
    var tmpAtts = props.attributes;

    var tmpDisplay = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    const checkboxList = ['fluid', 'avatar', 'rounded', 'circular', 'urlopentab', 'bordered', 'centered'];

    return <>
        <InspectorControls>

            <PanelBody title={istr('General Settings')}>
                {PressinoUI.getStandardProperty(theProps, attNamesDef, 'Image', 'image')}
                {PressinoUI.getStandardProperty(theProps, 'size', 'Image size', 'sizes')}
                {(tmpAtts.avatar || tmpAtts.rounded) && (PressinoUI.getStandardProperty(theProps, 'circular', 'Circular', 'checkbox'))}


                {/* {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                {PressinoUI.getStandardProperty(theProps, 'stacked', 'Stacked', 'checkbox')} */}
{/* 
                BlockEditor.getStandardProperty(props, attNamesDef, 'Image', 'image'),
                (tmpAtts.avatar || tmpAtts.rounded) ? '' : BlockEditor.getStandardProperty(props, 'circular', 'Circular', 'checkbox'),
                (tmpAtts.avatar || tmpAtts.circular) ? '' : BlockEditor.getStandardProperty(props, 'rounded', 'Rounded', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'bordered', 'Bordered', 'checkbox'),
                (tmpAtts.avatar || tmpAtts.fluid) ? '' : BlockEditor.getStandardProperty(props, 'size', 'Size', 'size'),
                (tmpAtts.avatar || tmpAtts.size) ? '' : BlockEditor.getStandardProperty(props, 'fluid', 'Full width', 'checkbox'),
                (tmpAtts.size) ? '' : BlockEditor.getStandardProperty(props, 'avatar', 'Show as icon', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'url', 'Target Content or Link', 'url'),
                !(tmpAtts.url) ? '' : BlockEditor.getStandardProperty(props, 'urlopentab', 'Open link in new tab?', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'spaced', 'Add spacing to link?', 'checkbox'),
                (tmpAtts.float) ? '' : BlockEditor.getStandardProperty(props, 'centered', 'Centered', 'checkbox'),
                (tmpAtts.centered) ? '' : BlockEditor.getStandardProperty(props, 'float', 'Float', 'floatleftright'),
                BlockEditor.getStandardProperty(props, 'alignmentvertical', 'Veritcal Alignment', 'alignmentvertical'),
                 */}
            </PanelBody>

            {/* <PanelBody title={istr('Formatting Options')}>
                {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                {PressinoUI.getStandardProperty(theProps, 'alignment', 'Alignment', 'alignment')}
                {PressinoUI.getStandardProperty(theProps, 'clearing', 'Contain Floaters', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
            </PanelBody> */}

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
