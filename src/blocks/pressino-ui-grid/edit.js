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
    PressinoUI.addBlock({ blockName: 'pressino/gridcolumn' })
}

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes } = props;
    var tmpDisplay = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();

    var tmpAtts = props.attributes;
    if (!(tmpAtts.groupname)) {
        tmpAtts.groupname = PressinoUI.getRandomID();
    }

    return <>
        <div {...blockProps}>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={PressinoUI.getBlockIcon('addgridcolumn')}
                        label="Add Column"
                        text="Add Column"
                        onClick={onAddBlock}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(props, 'mincolwidth', 'Min Column Width', 'number')}
                    {PressinoUI.getStandardProperty(props, 'gridspacing', 'Space Between Columns', 'slimwidespacing')}
                    {PressinoUI.getStandardProperty(props, 'centered', 'Centered', 'checkbox')}
                </PanelBody>
            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}