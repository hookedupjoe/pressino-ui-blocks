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

    // var tmpParentBlock = PressinoUI.getParentBlock(props.clientId);
    
    // if( tmpParentBlock && tmpParentBlock.innerBlocks ){
    //     var tmpIBs = tmpParentBlock.innerBlocks;
    //     for( var iPos in tmpIBs){
    //         var tmPIB = tmpIBs[iPos];
    //         if( tmPIB.clientId == props.clientId ){
    //             //--- This is me
    //             if( tmpAtts.tabpos != iPos ){
    //                 tmpAtts.tabpos = iPos;
    //                 PressinoUI.refreshBlockEditor();
    //             }
    //         }
            
    //     }
    // }

    //ToDo: Add refresh option for itemname and label **
    let tmpSidebarControls = <InspectorControls>

    <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'title', 'Card Title', 'text') } 
        {PressinoUI.getStandardProperty(theProps, 'subtitle', 'Sub Title', 'text')} 
        {PressinoUI.getStandardProperty(theProps, 'color', 'Card Color', 'colors')} 
        {PressinoUI.getStandardProperty(theProps, { mediaID: 'mediaID', mediaURL: 'mediaURL' }, 'Card Image', 'image')}
        {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')} 
        {PressinoUI.getStandardProperty(theProps, 'urlopentab', 'Open link in new tab?', 'checkbox')} 
        {PressinoUI.getStandardProperty(theProps, 'title', 'fluid', 'Full width', 'checkbox')} 
        {PressinoUI.getStandardProperty(theProps, 'raised', 'Raised', 'checkbox')} 
        {PressinoUI.getStandardProperty(theProps, 'headerColor', 'Header Color', 'colors')} 
        
    </PanelBody>


</InspectorControls>


    var tmpEditorClass = '';
    tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if( props.isSelected ){
        tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }
    

    // var tmpTabPrefix = el('div',{className: 'ui label grey right pointing'}, 'Tab');
    // var tmpAddedInfo = '';
    // if(tmpItemName.length < 30){
    //     tmpAddedInfo = ' [' + tmpItemName + ']'
    // }
    // var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpTabLabel + tmpAddedInfo);

    // if(tmpTabLabel == '' ){
    //     var tmpTabPrefix = el('div',{className: 'ui label orange right pointing'}, 'Required: ');
    //     var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, 'Every tab entry needs a tab label.', el('span',{'className': 'ui bolder padt8 larger marl10'}, 'Set value in settings.'));
    // }

    // var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 grey small"}, tmpTabPrefix,tmpTabNameLabel);
//  tmpEditHeader,

    var tmpRetEl = el(
        'div',
        {className: tmpEditorClass},
        [
          
            tmpSidebarControls,
            tmpDisplayObject
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>

   // return tmpRetEl;

}
