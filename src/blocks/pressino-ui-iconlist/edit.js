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

const onAddBlock = () => {
    PressinoUI.addBlock({ blockName: 'pressino/iconlistitem' })
}

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes } = props;
    var tmpDisplay = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { useimage } = attributes;

    var tmpAtts = props.attributes;
    if (!(tmpAtts.groupname)) {
        tmpAtts.groupname = PressinoUI.getRandomID();
    }

    return <>
        <div {...blockProps}>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={PressinoUI.getBlockIcon('pressino/iconlistitem')}
                        label="Add New Item"
                        text="Add New Item"
                        onClick={onAddBlock}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(props, 'useimage', 'Use Image', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'size', useimage ? 'Image Size' : 'Icon Size', 'sizes')}
                    {PressinoUI.getStandardProperty(props, 'middle', 'Centered', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'celled', 'Lines Between Items', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'separated', 'Vertical Lines', 'checkbox')}
                </PanelBody>
            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}