/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'color', 'Message Color', 'colors')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Overall Size', 'sizes')}
                    {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(theProps, 'floating', 'Floating', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'compact', 'Compact', 'checkbox')}

                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'margin', 'Margin', 'margin')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
