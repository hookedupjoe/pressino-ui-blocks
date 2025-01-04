/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, el, attNamesIcon } from '../../pressino-ui';
import display from './display';
import { useState } from '@wordpress/element';
import classNames from 'classnames';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplayObject = display({ props: theProps, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { useicon, iconname, icontype, parentMenuIconPos, parentColor, parentInverted, parentPanelsInverted, parentBlackBack, parentInsidePadding} = attributes;
    var props = theProps;
    //---
    var tmpAtts = attributes;
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);
    
    var tmpNeedToRefresh = false;
    var tmpPanelClasses = '';
    

    var tmpParentBlock = PressinoUI.getParentBlock(props.clientId);
    if( tmpParentBlock ){
        var tmpParentAttributes =  tmpParentBlock.attributes;
        var tmpNeedToUpdate = false;
        var tmpAttsToSet = {};
        
        var tmpParentInvertVal = '';
        if( tmpParentAttributes.inverted === true ){
            tmpParentInvertVal = 'inverted';
        }
        var tmpParentPanelInvertVal = '';
        if( tmpParentAttributes.panelsinverted === true ){
            tmpParentPanelInvertVal = 'inverted ' + parentColor;
        }

        

        if( parentInverted != tmpParentInvertVal ){   
            tmpAttsToSet.parentInverted = tmpParentInvertVal;
            tmpNeedToUpdate = true;
            tmpNeedToRefresh = true;
        }

        if( parentPanelsInverted != tmpParentPanelInvertVal ){   
            tmpAttsToSet.parentPanelsInverted = tmpParentPanelInvertVal;
            tmpNeedToUpdate = true;
            tmpNeedToRefresh = true;
        }

        if( parentBlackBack != tmpParentAttributes.blackback ){   
            tmpAttsToSet.parentBlackBack = tmpParentAttributes.blackback;
            tmpNeedToUpdate = true;
            tmpNeedToRefresh = true;
        }
        if( parentInsidePadding != tmpParentAttributes.insidepadding ){   
            tmpAttsToSet.parentInsidePadding = tmpParentAttributes.insidepadding;
            tmpNeedToUpdate = true;
            tmpNeedToRefresh = true;
        }
        

        
        if( parentColor != tmpParentAttributes.color){
            tmpAttsToSet.parentColor = tmpParentAttributes.color;
            tmpNeedToUpdate = true;
        }
        if( parentMenuIconPos != tmpParentAttributes.menuiconpos){
            tmpAttsToSet.parentMenuIconPos = tmpParentAttributes.menuiconpos;
            tmpNeedToUpdate = true;
            tmpNeedToRefresh = true;
        }
        if( tmpNeedToUpdate ){
            setAttributes(tmpAttsToSet);
          
        }
       
    }



    if( tmpParentBlock && tmpParentBlock.innerBlocks ){
        var tmpIBs = tmpParentBlock.innerBlocks;
        for( var iPos in tmpIBs){
            var tmPIB = tmpIBs[iPos];
            if( tmPIB.clientId == props.clientId ){
                //--- This is me
                if( tmpAtts.tabpos != iPos ){
                    tmpAtts.tabpos = iPos;
                    tmpNeedToRefresh = true;
                    
                }
            }
            
        }
    }
    
    if (tmpNeedToRefresh){
        PressinoUI.refreshBlockEditor();
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
        tmpIconEl = PressinoUI.getIconEl(attributes);
    }

    //var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpIconEl, tmpTabLabel + tmpAddedInfo);
    var tmpHasIcon = (!useicon || iconname == '');

    // var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 grey small"}, tmpTabPrefix,tmpTabNameLabel);

    var tmpItemClasses = '';
    if( !tmpTabLabel && tmpHasIcon  ){
        tmpItemClasses += ' icon';
    }
    
    var tmpHeaderClasses = '';
    if( parentMenuIconPos == 'top' ){
        tmpHeaderClasses += ' icon labeled';
    }
    if( parentColor && ! parentBlackBack ){
        tmpHeaderClasses += ' ' + parentColor;
    }
    if( parentColor  ){
        tmpItemClasses += ' ' + parentColor;
    }
    

    if( parentInverted){
       tmpHeaderClasses += ' inverted';
    }

    var tmpEditHeader = <div className={'mar0 pad0 ui top attached tabular menu withicon ' + tmpHeaderClasses}>
    <div className={'item active ' + tmpItemClasses}>
        {tmpIconEl}
        {tmpTabLabel}
    </div>
    </div>


    if(tmpTabLabel == '' && tmpHasIcon){
        var tmpTabPrefix = el('div',{className: 'ui label orange right pointing'}, 'Required: ');
        var tmpTabNameLabel = el('div',{className: 'ui label grey basic  padr10'}, 'Every tab entry needs a tab label or an icon.', el('span',{'className': 'ui bolder padt8 larger marl10'}, 'Set value in settings.'));
        tmpEditHeader = [tmpTabPrefix,tmpTabNameLabel]
    }


    
    var tmpRetEl = el(
        'div',
        {className: tmpEditorClass},
        [
            tmpEditHeader,
            el('div', {className: 'ui segment bottom attached ' + parentPanelsInverted  + ' ' + (parentInsidePadding || '')}, 
                tmpSidebarControls,
                tmpDisplayObject
            )
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>


}
