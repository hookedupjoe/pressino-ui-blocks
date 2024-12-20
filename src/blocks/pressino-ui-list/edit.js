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

import { useState } from '@wordpress/element';


function onChangeAlignment() {
    alert('onChangeAlignment')
}
/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { bullettype } = attributes;
    var props = theProps;

    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);


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
                {/* 'relaxed','animated','selection','inverted','horizontal','link','ordered' */}
                {/* {PressinoUI.getStandardProperty(theProps, 'ordered', 'ordered', 'checkbox')} */}


                {PressinoUI.getStandardProperty(theProps, 'bulletcolor', 'Bullet Color', 'colors', true)}
                {PressinoUI.getStandardProperty(theProps, 'bulletsize', 'Bullet size', 'sizes', true)}

                {PressinoUI.getStandardProperty(theProps, 'bullettype', 'Bullet Type', 'bullettypes', true)}
                {(bullettype =='icon' && PressinoUI.getSettingsForIcon({ label: 'Select Icon', isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen, attributes, setAttributes, refreshChildren:true }))}

                {PressinoUI.getStandardProperty(theProps, 'celled', 'celled', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'separated', 'separated', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'relaxed', 'relaxed', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'animated', 'animated', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'selection', 'selection', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'inverted', 'inverted', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'horizontal', 'horizontal', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'link', 'link', 'checkbox')}

                    {PressinoUI.getStandardProperty(theProps, 'valign', 'Vertical Alignment', 'valignment')}
                   
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
