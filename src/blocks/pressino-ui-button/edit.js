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
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpAtts = theProps.attributes;

    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { url } = attributes;
   
    return <>
        <InspectorControls>

            <PanelBody title={istr('General Settings')}>
                {PressinoUI.getStandardProperty(theProps, 'text', 'Button Text', 'text')}
                {PressinoUI.getStandardProperty(theProps, 'color', 'Button Color', 'colors')}
                {PressinoUI.getStandardProperty(theProps, 'size', 'Size', 'sizes')}
                {PressinoUI.getStandardProperty(theProps, 'circular', 'Circular', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'basic', 'Outlined', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'compact', 'Compact', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'fluid', 'Full Width', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'float', 'Float Left/Right', 'float')}
                {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')}
                {(url && PressinoUI.getStandardProperty(theProps, 'urlopentab', 'Open URL in new tab?', 'checkbox'))}
            </PanelBody>

            <PanelBody title={istr('Formatting Options')}>
                {PressinoUI.getStandardProperty(theProps, 'margin', 'Margin', 'margin')}
                {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                {PressinoUI.getStandardProperty(theProps, 'bottommargin', 'Bottom Margin', 'bottommargin')}
                {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
           </PanelBody>

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
