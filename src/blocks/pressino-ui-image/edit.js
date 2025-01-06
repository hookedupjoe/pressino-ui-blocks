/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, attNamesMedia } from '../../pressino-ui';
import display from './display';


/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes } = props;
    var theProps = props;
    var tmpAtts = props.attributes;

    var tmpDisplay = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, attNamesMedia, 'Image', 'image')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Image size', 'imagesizes')}
                    {PressinoUI.getStandardProperty(theProps, 'rounded', 'Rounded', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'bordered', 'Bordered', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'circular', 'Circular', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'spaced', 'Add space around image', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')}
                    {PressinoUI.getStandardProperty(theProps, 'urlopentab', 'Open URL in new tab?', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'float', 'Float', 'float')}
                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'centered', 'Centered', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'margin', 'Margin', 'margin')}
                    {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>

            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
