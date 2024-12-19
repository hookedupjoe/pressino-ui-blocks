/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, attNamesDef } from '../../pressino-ui';
import display from './display';

import { useEffect, useRef, useState } from '@wordpress/element';


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;

    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { url, useicon } = attributes;
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);
    

    return <>

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
                {(useicon && PressinoUI.getSettingsForIcon({label: 'Select Icon',attname: 'iconname',isInserterOpen,setInserterOpen,isQuickInserterOpen,setQuickInserterOpen,attributes,setAttributes}))}
                {/* {PressinoUI.getStandardProperty(theProps, 'iconnamesel', 'Icon', 'icon',false, false,{isQuickInserterOpen, setQuickInserterOpen})} */}
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
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
