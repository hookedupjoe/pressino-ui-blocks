/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, el, attNamesIcon } from '../../pressino-ui';
import display from './display';
import { useState } from '@wordpress/element';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplayObject = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { useicon, iconname, icontype} = attributes;
    var props = theProps;
    //---
    var tmpAtts = props.attributes;
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);
    
    var tmpParentBlock = PressinoUI.getParentBlock(props.clientId);
    
    if( tmpParentBlock && tmpParentBlock.innerBlocks ){
        var tmpIBs = tmpParentBlock.innerBlocks;
        for( var iPos in tmpIBs){
            var tmPIB = tmpIBs[iPos];
            if( tmPIB.clientId == props.clientId ){
                //--- This is me
                if( tmpAtts.tabpos != iPos ){
                    tmpAtts.tabpos = iPos;
                    PressinoUI.refreshBlockEditor();
                }
            }
            
        }
    }

    if( !(tmpAtts.itemname) ){
        tmpAtts.itemname = PressinoUI.getRandomID();
    }

    var tmpItemName = tmpAtts.itemname || ''
    var tmpTabLabel = tmpAtts.tablabel || '';

    //ToDo: Add refresh option for itemname and label **
    let tmpSidebarControls = <InspectorControls>

    <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'itemname', 'Unique Item Name (Required)', 'text', true) } 
        {PressinoUI.getStandardProperty(theProps, 'tablabel', 'Tab Label', 'text', true)}
        {PressinoUI.getStandardProperty(theProps, 'useicon', 'Use Icon', 'checkbox')}
        {(useicon && PressinoUI.getSettingsForIcon({ label: 'Select Icon', attname: attNamesIcon, isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen, attributes, setAttributes }))}
        
        {/* {(useicon && PressinoUI.getSettingsForIcon({ useState, attributes, setAttributes }))} */}
    </PanelBody>
{/* 
    <PanelBody title={istr('Formatting Options')}>
        {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
    </PanelBody> */}

</InspectorControls>


    var tmpEditorClass = '';
    tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if( props.isSelected ){
        tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }
    

    var tmpTabPrefix = el('div',{className: 'ui label grey right pointing'}, 'Tab');
    var tmpAddedInfo = '';
    // if(tmpItemName.length < 30){
    //     tmpAddedInfo = ' [' + tmpItemName + ']'
    // }
    var tmpIconEl = '';
    if( useicon && iconname ){
        tmpIconEl = PressinoUI.getIconEl({...attributes, ...{iconsize: 'large'}});
    }

    var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpIconEl, tmpTabLabel + tmpAddedInfo);

    if(tmpTabLabel == '' && iconname == '' ){
        var tmpTabPrefix = el('div',{className: 'ui label orange right pointing'}, 'Required: ');
        var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, 'Every tab entry needs a tab label or an icon.', el('span',{'className': 'ui bolder padt8 larger marl10'}, 'Set value in settings.'));
    }

    var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 grey small"}, tmpTabPrefix,tmpTabNameLabel);

    var tmpRetEl = el(
        'div',
        {className: tmpEditorClass},
        [
            tmpEditHeader,
            tmpSidebarControls,
            tmpDisplayObject
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>


}
