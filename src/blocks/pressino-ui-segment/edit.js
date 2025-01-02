/**
 * In-Edit UI
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';

import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { plusCircle as blockIcon } from '@wordpress/icons';

import { Toolbar } from '@wordpress/components';
import { formatBold, formatItalic, link } from '@wordpress/icons';

const onAddHeaderBlock = () => {
    PressinoUI.addBlock({ blockName: 'pressino/header' })
}

const onAddMessageBlock = () => {
    PressinoUI.addBlock({ blockName: 'pressino/message' })
}

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;

    let tmpEditToolbar = !theProps.isSelected ?  '' : <Toolbar label="Options">
        <ToolbarGroup>
            <ToolbarButton
                icon={blockIcon}
                label="Add Header"
                text="Add Header"
                onClick={onAddHeaderBlock}
            />
            <ToolbarButton
                icon={blockIcon}
                label="Add Message"
                text="Add Message"
                onClick={onAddMessageBlock}
            />
        </ToolbarGroup>
    </Toolbar>;

    return <>
        <div {...blockProps}>
            {tmpEditToolbar}

            <InspectorControls>
                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'basic', 'No Border', 'checkbox')}
                    {!basic && (PressinoUI.getStandardProperty(theProps, 'raised', 'Raised', 'checkbox'))}
                    {PressinoUI.getStandardProperty(theProps, 'color', 'Segment Color', 'colors')}
                    {PressinoUI.getStandardProperty(theProps, 'inverted', 'Inverted', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Overall size', 'sizes')}
                    {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(theProps, 'stacked', 'Stacked', 'checkbox')}

                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'alignment', 'Alignment', 'alignment')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>

            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
