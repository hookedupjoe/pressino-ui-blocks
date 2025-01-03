/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';

import { useState } from '@wordpress/element';


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;

    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { url, useicon } = attributes;

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'text', 'Button Text', 'text')}
                    {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')}
                    {(url && PressinoUI.getStandardProperty(theProps, 'urlopentab', 'Open URL in new tab?', 'checkbox'))}
                    {PressinoUI.getStandardProperty(theProps, 'color', 'Button Color', 'colors')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Size', 'sizes')}
                    {PressinoUI.getStandardProperty(theProps, 'circular', 'Circular', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'basic', 'Outlined', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'compact', 'Compact', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'fluid', 'Full Width', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(theProps, 'useicon', 'Use Icon', 'checkbox')}
                    {(useicon && PressinoUI.getSettingsForIcon({ useState, attributes, setAttributes }))}
                    {(useicon && PressinoUI.getStandardProperty(theProps, 'iconname', "Icon Name", 'text'))}
                    {(useicon && PressinoUI.getStandardProperty(theProps, 'iconalign', 'Icon on Right Side', 'checkbox'))}
                    {(useicon && PressinoUI.getStandardProperty(theProps, 'iconaslabel', 'Icon as Label', 'checkbox'))}
                </PanelBody>


                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'float', 'Float Left/Right', 'float')}
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
