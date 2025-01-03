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

import { useState } from '@wordpress/element';


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { bullettype } = attributes;
    var props = theProps;

    const onAddBlock = () => {
        PressinoUI.addBlock({ blockName: 'pressino/listitem' })
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
                        icon={PressinoUI.getBlockIcon('addlistitem')}
                        label="Add Item"
                        text="Add Item"
                        onClick={onAddBlock}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'listsize', 'Overall size', 'sizes', true)}
                    {PressinoUI.getStandardProperty(theProps, 'celled', 'Add Lines', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'relaxed', 'Extra padding', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'animated', 'Animate on hover', 'checkbox')}
                </PanelBody>

                <PanelBody title={istr('Bullet Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'bullettype', 'Bullet Type', 'bullettypes', true)}
                    {(bullettype == 'icon' && PressinoUI.getSettingsForIcon({ label: 'Select Icon', useState, setAttributes, refreshChildren: true }))}
                    {PressinoUI.getStandardProperty(theProps, 'bulletcolor', 'Bullet Color', 'colors', true)}
                    {PressinoUI.getStandardProperty(theProps, 'bulletsize', 'Bullet size', 'sizes', true)}
                    {PressinoUI.getStandardProperty(theProps, 'bulletalign', 'Bullet Alignment', 'valignbasic', true)}
                </PanelBody>

            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
