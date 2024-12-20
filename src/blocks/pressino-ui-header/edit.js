/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, attNamesMedia } from '../../pressino-ui';
import display from './display';


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpAtts = theProps.attributes;

    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    const checkboxList = ['', '', '', '', '', '', ''];

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'text', 'Header Text', 'text')}
                    {PressinoUI.getStandardProperty(theProps, 'subtext', 'Sub Text', 'text')}
                    {PressinoUI.getStandardProperty(theProps, 'color', 'Header Color', 'colors')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Header size', 'sizes')}

                    {PressinoUI.getStandardProperty(theProps, 'inverted', 'Inverted', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'dividing', 'Line at bottom', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'block', 'Show as block', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(theProps, 'alignment', 'Alignment', 'alignment')}

                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'margin', 'Margin', 'margin')}
                    {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'bottommargin', 'Bottom Margin', 'bottommargin')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
