/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplayObject = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, attached } = attributes;
    var props = theProps;
    //---
    var tmpAtts = props.attributes;

    var tmpParentBlock = PressinoUI.getParentBlock(props.clientId);
            
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
    if( !(tmpAtts.itemname) ){
        tmpAtts.itemname = PressinoUI.getRandomID();
    }

    var tmpItemName = tmpAtts.itemname || ''
    var tmpTabLabel = tmpAtts.tablabel || '';

    //ToDo: Add refresh option for itemname and label **
    let tmpSidebarControls = <InspectorControls>

    <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'itemname', 'Unique Item Name (Required)', 'text') } 
        {PressinoUI.getStandardProperty(theProps, 'tablabel', 'Tab Label (Required)', 'text')}
    </PanelBody>
{/* 
    <PanelBody title={istr('Formatting Options')}>
        {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
    </PanelBody> */}

</InspectorControls>

    // //var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);
    // var tmpStandardProperties = [
    //     BlockEditor.getStandardProperty(props, 'itemname', 'Unique Item Name (Required)', 'text', BlockEditor.standardOnChangeRefresh),
    //     BlockEditor.getStandardProperty(props, 'tablabel', 'Tab Label (Required)', 'text', BlockEditor.standardOnChangeRefresh),
    // ];

    // var tmpFormatProperties = [
    //     BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
    // ];

    // var tmpSidebarPanels = [
    //     BlockEditor.getSidebarPanel('Column Options', tmpStandardProperties),
    //     BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
    // ];

    // var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

    var tmpEditorClass = '';
    if( props.isSelected ){
        tmpEditorClass += ' actapp-block-is-selected';
    } else {
        tmpEditorClass += ' actapp-block-box';
    }
    
    var tmpTabPrefix = el('div',{className: 'ui label grey right pointing'}, 'Tab');
    var tmpAddedInfo = '';
    if(tmpItemName.length < 30){
        tmpAddedInfo = ' [' + tmpItemName + ']'
    }
    var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpTabLabel + tmpAddedInfo);

    if(tmpTabLabel == '' ){
        var tmpTabPrefix = el('div',{className: 'ui label orange right pointing'}, 'Required: ');
        var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, 'Every tab entry needs a tab label.', el('span',{'className': 'ui bolder padt8 larger marl10'}, 'Set value in settings.'));
    }

    //var tmpHM = tmpTabLabel;
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

    //return el('div',{},tmpEditHeader, tmpRetEl);

    //---

    return <>
        <InspectorControls>

            <PanelBody title={istr('General Settings')}>
                {PressinoUI.getStandardProperty(theProps, 'groupname', 'Group Name', 'text')}
                {PressinoUI.getStandardProperty(theProps, 'color', 'Tabs Color', 'colors')}
                {PressinoUI.getStandardProperty(theProps, 'inverted', 'Inverted', 'checkbox')}
                {PressinoUI.getStandardProperty(theProps, 'labelpadding', 'Label Padding', 'slimwidespacing')}
                {PressinoUI.getStandardProperty(theProps, 'bodyonly', 'Exclude the tabs?', 'checkbox')}
            </PanelBody>

            <PanelBody title={istr('Formatting Options')}>
                {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
            </PanelBody>

            {/* var tmpStandardProperties = [
    BlockEditor.getStandardProperty(props, 'groupname', 'Group Name', 'text'),
    BlockEditor.getStandardProperty(props, 'color', 'Tabs Color', 'color'),
    BlockEditor.getStandardProperty(props, 'inverted', 'Inverted', 'checkbox'),
    BlockEditor.getStandardProperty(props, 'labelpadding', 'Label Padding', 'slimwidespacing'),
    BlockEditor.getStandardProperty(props, 'bodyonly', 'Exclude the tabs?', 'checkbox'),
   ];

    var tmpFormatProperties = [
        BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
    ];
    
    var tmpSidebarPanels = [
        BlockEditor.getSidebarPanel('Columns Container Options', tmpStandardProperties),
        BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
    ]; */}

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
