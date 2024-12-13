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
        {PressinoUI.getStandardProperty(theProps, 'tablabel', 'Tab Label (Required)', 'text', true)}
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
    if(tmpItemName.length < 30){
        tmpAddedInfo = ' [' + tmpItemName + ']'
    }
    var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpTabLabel + tmpAddedInfo);

    if(tmpTabLabel == '' ){
        var tmpTabPrefix = el('div',{className: 'ui label orange right pointing'}, 'Required: ');
        var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, 'Every tab entry needs a tab label.', el('span',{'className': 'ui bolder padt8 larger marl10'}, 'Set value in settings.'));
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
