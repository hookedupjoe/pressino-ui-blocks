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
    PressinoUI.addBlock({ blockName: 'pressino/imagelistitem' })
}

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes } = props;
    var tmpDisplay = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { useicon, stackat } = attributes;

    var tmpAtts = props.attributes;
    if (!(tmpAtts.groupname)) {
        tmpAtts.groupname = PressinoUI.getRandomID();
    }

    return <>
        <div {...blockProps}>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={PressinoUI.getBlockIcon('pressino/imagelistitem')}
                        label="Add List Item"
                        text="Add List Item"
                        onClick={onAddBlock}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody title={istr('General Settings')}>
                    {/* {PressinoUI.getStandardProperty(props, 'useicon', 'Use Icon', 'checkbox')} */}
                    {PressinoUI.getStandardProperty(props, 'size', useicon ? 'Icon Size' : 'Image Size', 'sizes')}
                    {PressinoUI.getStandardProperty(props, 'borderstyle','Border Style', 'select', null, 'None|,Segment|segment,Segment Bordered|bordered,Segment Inverted|inverted,Message|message')}
                    {PressinoUI.getStandardProperty(props, 'color', 'Color', 'colors')}
                    {PressinoUI.getStandardProperty(props, 'middle', 'Centered', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'centered', 'Centered when stacked', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'imagestyle', useicon ? 'Icon Style' : 'Image Style', 'imagestyles')}
                    {PressinoUI.getStandardProperty(props, 'imagebordered', 'Add Image Border', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'dividing', 'Lines Between Items', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'stackat', 'Stack when parent at (px)', 'number')}
                    <div class="ui message blue small"><string>Note:</string>Leave blank and it will break or not break based on image size.  Set if you need to change how it works.</div>
                </PanelBody>
            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}