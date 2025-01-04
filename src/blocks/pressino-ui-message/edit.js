/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, LinkFormat, VisibilityOptions } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes } = props;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(props, 'color', 'Message Color', 'colors')}
                    {PressinoUI.getStandardProperty(props, 'size', 'Overall Size', 'sizes')}
                    {PressinoUI.getStandardProperty(props, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(props, 'floating', 'Floating', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'compact', 'Compact', 'checkbox')}
                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(props, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(props, 'margin', 'Margin', 'margin')}
                    {PressinoUI.getStandardProperty(props, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>

                {LinkFormat.getSettings(props,{color:false})}
                {VisibilityOptions.getSettings(props)}

            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
