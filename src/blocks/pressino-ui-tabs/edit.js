/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, el, PressinoUI } from '../../pressino-ui';
import display from './display';

import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { plusCircle as blockIcon } from '@wordpress/icons';

import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
const { store: blockEditorStore } = wp.blockEditor;
// const { useSelect } = wp.data;


const onAddBlock = () => {
    PressinoUI.addBlock({ blockName: 'pressino/tab' })
}

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { inverted, color } = attributes;
    var props = theProps;

    var tmpAtts = props.attributes;
    if (!(tmpAtts.groupname)) {
        tmpAtts.groupname = PressinoUI.getRandomID();
    }

    return <>

        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon={PressinoUI.getBlockIcon('addtab')}
                    label="Add Tab"
                    text="Add Tab"
                    onClick={onAddBlock}
                />
            </ToolbarGroup>
        </BlockControls>

        <InspectorControls>

            <PanelBody title={istr('General Settings')}>
                {PressinoUI.getStandardProperty(theProps, 'groupname', 'Group Name', 'text')}
                {PressinoUI.getStandardProperty(theProps, 'color', 'Tabs Color', 'colors')}
                {PressinoUI.getStandardProperty(theProps, 'inverted', 'Tabs Inverted', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'panelsinverted', 'Tab Panels Inverted', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'insidepadding', 'Tab Body Padding', 'padding', true)}
                {PressinoUI.getStandardProperty(theProps, 'labelpaddingwide', 'Wide Label Padding', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'menuiconpos', 'Tab Icon Position', 'menuiconpos')}
                {PressinoUI.getStandardProperty(theProps, 'bodyonly', 'Exclude the tabs', 'checkbox')}
                
            </PanelBody>

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
