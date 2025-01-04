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
    const { attributes, setAttributes } = props;
    const { parentStackWhen, ismain } = attributes;

    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();

    var tmpParentBlock = PressinoUI.getParentBlock(props.clientId);
    if( tmpParentBlock ){
        var tmpParentAttributes =  tmpParentBlock.attributes;
        var tmpNeedToUpdate = false;
        var tmpAttsToSet = {};
        

        if( parentStackWhen != tmpParentAttributes.stackwhen ){   
            tmpAttsToSet.parentStackWhen = tmpParentAttributes.stackwhen;
            tmpNeedToUpdate = true;
            // tmpNeedToRefresh = true;
        }
       
        if( tmpNeedToUpdate ){
            setAttributes(tmpAttsToSet);
        }
        //--- Not doing anything in the editor UI, so no need to refresh block editor
        // if (tmpNeedToRefresh){
        //     PressinoUI.refreshBlockEditor();
        // }
    
    }


    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    var tmpRatio = tmpParentAttributes.splitratio || '10';
    tmpRatio = parseInt(tmpRatio);
    if( tmpRatio == 0 ){
        tmpRatio = 10;
    }
    var tmpMyRatio = ismain ? tmpRatio : 20 - tmpRatio;

    if( props.attributes.ratio != tmpMyRatio ){
        props.attributes.ratio = tmpMyRatio;
        PressinoUI.refreshBlockEditor();
    }

   
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

    tmpContent = el('div', { className: tmpEditorClass }, tmpContent);

    return <>
        <div {...blockProps}>
            {tmpEditToolbar}
            <InspectorControls>
                <PanelBody title={istr('Sidebar Location Options')}>
                    {(! ismain && PressinoUI.getStandardProperty(theProps, 'locationlr', "When Full Screen", 'locationlr'))}
                    {(! ismain && PressinoUI.getStandardProperty(theProps, 'locationtb', "When Stacked", 'locationtb'))}
                </PanelBody>
                <PanelBody title={istr('Advanced Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>
            </InspectorControls>
            {tmpContent}
        </div>
    </>

}
