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
    const { useicon, iconname, icontype, parent_color, parent_inverted, parent_panels_inverted, parent_insidepadding, 
        parent_labelpaddingwide, parent_menuiconpos, parentInsidePadding} = attributes;
    var props = theProps;
    //---
    var tmpAtts = attributes;

    const parentColor = parent_color;
    const parentInverted = parent_inverted;
    const parentPanelsInverted = parent_panels_inverted;

    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);
    
    if( !(tmpAtts.itemname) ){
        tmpAtts.itemname = PressinoUI.getRandomID();
    }

    var tmpTabLabel = tmpAtts.tablabel || '';
    let tmpSidebarControls = <InspectorControls>

    <PanelBody title={istr('General Settings')}>
        {PressinoUI.getStandardProperty(theProps, 'itemname', 'Unique Item Name (Required)', 'text', true) } 
        {PressinoUI.getStandardProperty(theProps, 'tablabel', 'Tab Label', 'text', true)}
        {PressinoUI.getStandardProperty(theProps, 'useicon', 'Use Icon', 'checkbox')}
        {(useicon && PressinoUI.getSettingsForIcon({ label: 'Select Icon', attname: attNamesIcon, isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen, attributes, setAttributes }))}
    </PanelBody>

</InspectorControls>


    var tmpEditorClass = '';
    tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if( props.isSelected ){
        tmpEditorClass =  PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }
    var tmpTabPrefix = el('div',{className: 'ui label grey right pointing'}, 'Tab');
    var tmpIconEl = '';
    if( useicon && iconname ){
        tmpIconEl = PressinoUI.getIconEl(attributes);
    }
    var tmpHasIcon = (!useicon || iconname == '');
    var tmpItemClasses = '';
    if( !tmpTabLabel && tmpHasIcon  ){
        tmpItemClasses += ' icon';
    }
    
    var tmpHeaderClasses = '';
    var tmpEdiSegClasses = '';
    if( parentPanelsInverted ){
        tmpEdiSegClasses += ' inverted ' + parentColor;
    }

    if( parent_menuiconpos == 'top' ){
        tmpHeaderClasses += ' icon labeled';
    }

    if( parentColor  ){
        tmpItemClasses += ' ' + parentColor;
    }

    
    if( parent_labelpaddingwide ){
        tmpHeaderClasses += ' widespace';
    }
 

    if( parentInverted ){
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
            el('div', {className: 'ui segment bottom attached ' + tmpEdiSegClasses  + ' ' + (parent_insidepadding || '')}, 
                tmpSidebarControls,
                tmpDisplayObject
            )
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>


}
