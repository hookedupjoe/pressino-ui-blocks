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
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var theProps = props;
    var tmpDisplay = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;

    return <>
        <InspectorControls>

            <PanelBody title={istr('General Settings')}>
                {PressinoUI.getStandardProperty(theProps, 'basic', 'No Border', 'checkbox')}
                {!basic && (PressinoUI.getStandardProperty(theProps, 'raised', 'Raised', 'checkbox'))}
                {PressinoUI.getStandardProperty(theProps, 'color', 'Segment Color', 'colors')}
                {PressinoUI.getStandardProperty(theProps, 'size', 'Overall size', 'sizes')}
                {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                {PressinoUI.getStandardProperty(theProps, 'stacked', 'Stacked', 'checkbox')}

            </PanelBody>

            <PanelBody title={istr('Formatting Options')}>
                {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                {PressinoUI.getStandardProperty(theProps, 'alignment', 'Alignment', 'alignment')}
                {PressinoUI.getStandardProperty(theProps, 'clearing', 'Contain Floaters', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
            </PanelBody>

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
