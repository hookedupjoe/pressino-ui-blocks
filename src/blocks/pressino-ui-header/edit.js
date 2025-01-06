/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, attNamesIcon } from '../../pressino-ui';
import display from './display';
import { PressinoAlignmentControl } from '../../components/pressino-alignment-control'
import { useState } from '@wordpress/element';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;

    var tmpDisplay = display({attributes, editMode: true});
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);
    const blockProps = useBlockProps();
    const { useicon, alignment } = attributes;
    
    return <>
        <div {...blockProps}>
            <BlockControls group="block">
                <PressinoAlignmentControl
                    value={alignment?.replace(' aligned', '')}
                    onChange={(nextAlign) => {
                        let tmpToSet = nextAlign ? nextAlign + ' aligned' : '';
                        setAttributes({ alignment: tmpToSet });
                    }}
                />
            </BlockControls>

            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'text', 'Header Text', 'text')}
                    {(PressinoUI.getStandardProperty(theProps, 'subtext', 'Sub Text', 'text'))}
                    {PressinoUI.getStandardProperty(theProps, 'color', 'Header Color', 'colors')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Header size', 'sizes')}
                    {PressinoUI.getStandardProperty(theProps, 'useicon', 'Use Icon', 'checkbox')}
                    {(useicon && PressinoUI.getSettingsForIcon({ label: 'Select Icon', attname: attNamesIcon, isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen, attributes, setAttributes }))}
                    {(useicon && PressinoUI.getStandardProperty(theProps, 'iconontop', 'Icon on top (centers header)', 'checkbox'))}
                    {(useicon && PressinoUI.getStandardProperty(theProps, 'iconcolor', 'Icon Color', 'colors'))}
                    {(useicon && PressinoUI.getStandardProperty(theProps, 'iconsize', 'Icon Size', 'iconsizes'))}
                    {(! useicon && PressinoUI.getStandardProperty(theProps, 'alignment', 'Alignment', 'alignment'))}
                    {PressinoUI.getStandardProperty(theProps, 'inverted', 'Inverted', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'dividing', 'Line at bottom', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'block', 'Show as block', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
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
