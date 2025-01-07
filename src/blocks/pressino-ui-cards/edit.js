/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';

import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';


/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var tmpDisplay = display({ props: props, attributes, editMode: true });
    const blockProps = useBlockProps();

    const onAddBlock = () => {
        PressinoUI.addBlock({ blockName: 'pressino/card' })
    }

    var tmpAtts = props.attributes;
    if (!(tmpAtts.groupname)) {
        tmpAtts.groupname = PressinoUI.getRandomID();
    }

    return <>
        <div {...blockProps}>
       
            <BlockControls>
          
                <ToolbarGroup>
                    <ToolbarButton
                        icon={PressinoUI.getBlockIcon('addcard')}
                        label="Add Card"
                        text="Add Card"
                        onClick={onAddBlock}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(props, 'columns', 'Columns', 'columns')}
                    {PressinoUI.getStandardProperty(props, 'mincolwidth', 'Min Column Width', 'number')}

                    {PressinoUI.getStandardProperty(props, 'cardspacing', 'Space Between Cards', 'slimwidespacing')}
                    {PressinoUI.getStandardProperty(props, 'imageheight', 'Cards Image Height', 'number')}
                    {PressinoUI.getStandardProperty(props, 'color', 'Cards Color', 'colors')}
                    {PressinoUI.getStandardProperty(props, 'headertype', 'Header Type', 'inverted')}

                    {PressinoUI.getStandardProperty(props, 'centered', 'Centered', 'checkbox')}
                    {PressinoUI.getStandardProperty(props, 'bottombydefault', 'Has Bottom Section by Default', 'checkbox')}
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
