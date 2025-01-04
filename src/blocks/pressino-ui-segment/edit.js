/**
 * In-Edit UI
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, LinkFormat, VisibilityOptions } from '../../pressino-ui';
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
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    let tmpEditToolbar = '';
    // let tmpEditToolbar = !props.isSelected ?  '' : <Toolbar label="Options">
    //     <ToolbarGroup>
    //         <ToolbarButton
    //             icon={blockIcon}
    //             label="Add Header"
    //             text="Add Header"
    //             onClick={onAddHeaderBlock}
    //         />
    //         <ToolbarButton
    //             icon={blockIcon}
    //             label="Add Message"
    //             text="Add Message"
    //             onClick={onAddMessageBlock}
    //         />
    //     </ToolbarGroup>
    // </Toolbar>;

    return <>
        <div {...blockProps}>
            {tmpEditToolbar}

            <InspectorControls>
                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(props, 'basic', 'No Border', 'checkbox')}
                    {!basic && (PressinoUI.getStandardProperty(props, 'raised', 'Raised', 'checkbox'))}
                    {PressinoUI.getStandardProperty(props, 'color', 'Segment Color', 'colors')}
                    {PressinoUI.getStandardProperty(props, 'inverted', 'Inverted', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'size', 'Overall size', 'sizes')}
                    {PressinoUI.getStandardProperty(props, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(props, 'stacked', 'Stacked', 'checkbox')}
                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(props, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(props, 'alignment', 'Alignment', 'alignment')}
                    {PressinoUI.getStandardProperty(props, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>
                {LinkFormat.getSettings(props,{color:false})}
                {VisibilityOptions.getSettings(props)}
            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
