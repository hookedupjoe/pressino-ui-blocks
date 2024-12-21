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

    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();

    var tmpContent = [];
    tmpContent.push(tmpDisplay);

    let tmpEditToolbar = (!attributes.extra || !theProps.isSelected) ? '' : <Toolbar label="Options">
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


    // if (attributes.extra && theProps.isSelected) {
    //     var tmpAddBtn = '';
    //     var tmpBtnBar = ''
    //     var tmpAddMsg = '';
    //     var tmpUIColor = '';

    //     tmpAddBtn = el('div', { className: 'ui compact button basic brown ', elementname: 'bottomattachedbutton', action: 'pressinoAddElement' }, 'Add Button');
    //     tmpAddMsg = el('div', { className: 'ui compact button basic brown ', elementname: 'bottomattachedmessage', action: 'pressinoAddElement' }, 'Add Message');
    //     tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
    //         tmpAddBtn, tmpAddMsg
    //     ], el('div', { className: 'endfloat' }));
    //     tmpUIColor = 'brown';

    //     var tmpFooter = el('div', { className: 'ui header top attached center aligned fluid ' + 'brown' }, el('div', { className: 'ui label brown basic fluid pointing up center aligned' }, 'Bottom Area: Optional'), tmpBtnBar);
    //     tmpContent.push(tmpFooter);

    // }

    var tmpEditorClass = '';
    tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if (theProps.isSelected) {
        tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    let tmpContentLabel = el('div', { className: 'ui header tiny black blue dividing mar8'}, 'Formatted Text')
    
    tmpContent = el('div', { className: tmpEditorClass }, el('div', {className: 'mar8'}, tmpContent));
   
   
    return <>
        <div >
            <InspectorControls>
                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'padding', "Padding", 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'margin', "Margin", 'margin')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>
            </InspectorControls>
            {tmpContent}
        </div>
    </>

}
