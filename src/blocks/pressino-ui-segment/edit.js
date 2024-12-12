/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import './editor.scss';
import display from './display';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
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
