/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import display from './display';


import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { plusCircle as blockIcon } from '@wordpress/icons';

import { Toolbar } from '@wordpress/components';
import { formatBold, formatItalic, link } from '@wordpress/icons';


const onAddButtonBlock = () => {
    PressinoUI.addBlock({ blockName: 'bottomattachedbutton' })
}

const onAddMessageBlock = () => {
    PressinoUI.addBlock({ blockName: 'bottomattachedmessage' })
}


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const props = theProps;
    const { attributes } = props;
    const { ismain } = attributes;

    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
   
    var tmpContent = [];
    tmpContent.push(tmpDisplay);

    let tmpEditToolbar = (!attributes.extra || !props.isSelected) ? '' : <Toolbar label="Options">
        <ToolbarGroup>
            <ToolbarButton
                icon={blockIcon}
                label="Add Bottom Button"
                text="Add Bottom Button"
                onClick={onAddButtonBlock}
            />
            <ToolbarButton
                icon={blockIcon}
                label="Add Bottom Message"
                text="Add Bottom Message"
                onClick={onAddMessageBlock}
            />
        </ToolbarGroup>
    </Toolbar>;


    var tmpEditorClass = '';
    tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if (theProps.isSelected) {
        tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    tmpContent = el('div', { className: tmpEditorClass }, tmpContent);

    return <>
        <div {...blockProps}>
            {tmpEditToolbar}
            <InspectorControls>
                <PanelBody title={istr('General  Options')}>
                    {PressinoUI.getStandardProperty(props, 'flexgrowbox', 'Fill column with first item?', 'checkbox')}
                </PanelBody>

                {! ismain && <PanelBody title={istr('Sidebar Location Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'locationlr', "When Full Screen", 'locationlr')}
                    {PressinoUI.getStandardProperty(theProps, 'locationtb', "When Stacked", 'locationtb')}
                </PanelBody>}

                <PanelBody title={istr('Advanced Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>
            </InspectorControls>
            {tmpContent}
        </div>
    </>

}
