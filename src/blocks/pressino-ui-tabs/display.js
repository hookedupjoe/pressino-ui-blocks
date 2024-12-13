/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
	boolean: [],
	string: []
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui tabs', classSpecs, theAtts, theIsEditMode);
    
    if( theAtts.classes ){
        tmpClasses +=  ' ' + theAtts.classes;
    }
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpClass = getClass(props, true);

    var tmpInvertedClass = '';
    if( tmpAtts.inverted == true ){
        tmpInvertedClass = 'inverted'
    }
    var tmpTabsColor = tmpAtts.color || '';

    var tmpTablinksEl = (el('div',{},''));
    if( editMode ){
        var tmpMe = PressinoUI.getBlockInEditor(props);
        var tmpTabs = tmpMe.innerBlocks;
        var tmpTabCount = tmpTabs.length;
        var tmpTabLinks = [];
        
        if(tmpTabCount){
            tmpAtts.firsttabid = '';
            for( var iPos in tmpTabs){
                var tmpTab = tmpTabs[iPos];
                var tmpTabAtts = tmpTab.attributes;
                tmpTabAtts.groupname = tmpAtts.groupname;
                tmpTabAtts.tabpos = iPos;

                var tmpTabGroup = tmpTabAtts.groupname;
                var tmpTabItem = tmpTabAtts.itemname || 'tab-' + (iPos+1);
                var tmpTabLabel = tmpTabAtts.tablabel || ('Tab: ' + tmpTabItem)
                if( !(tmpAtts.firsttabid)){
                    tmpAtts.firsttabid = tmpTabItem;
                }
                var tmpExtraClasses = '';
                if( iPos == 0){
                    tmpExtraClasses += 'active'
                }
                var tmpAddAtts = {
                    item: tmpTabItem,
                    group: tmpTabGroup,
                    appuse: 'tablinks',
                    action: "showSubPage",
                    className: "item " + tmpTabsColor + ' ' + tmpExtraClasses,
                    label: tmpTabLabel,
                    position: iPos
                };

                tmpTabLinks.push(tmpAddAtts)
            }
            var tmpTabLinkText = JSON.stringify(tmpTabLinks);
            if( tmpAtts.tabsinfo != tmpTabLinkText ){
                tmpAtts.tabsinfo = tmpTabLinkText;
                PressinoUI.refreshBlockEditor();
            }
            
        } else {
            tmpAtts.tabsinfo = '[]';
            tmpAtts.firsttabid = '';
        }
    }


    if (editMode) {
        var tmpUIColor = ''; 
        var tmpHeaderText = 'UI Tabs Container';
        var tmpIcon = <></>;

        var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)
        var tmpAddBtn = '';
        var tmpBtnBar = ''
        if (props.isSelected) {
            tmpIcon = PressinoUI.getControlImage();
            if( tmpAtts.groupname != '' ){
                tmpAddBtn = el('div', { className: 'ui compact button basic grey ', elementname: 'tab', action: 'pressinoAddElement' }, 'Add New Tab');
            } else {
                tmpAddBtn = el('div', { className: 'ui messsage orange compact small '}, 'Group Name Required. Add in settings.  Each set of tabs should have a unique group name.');
            }
            tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
                tmpAddBtn
            ], el('div', { className: 'endfloat' }));
            
        }
        tmpUIColor = 'grey';
       
        var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor },  tmpIcon, tmpHeaderMsg, tmpBtnBar);
        var tmpSegClasses = props.attributes.color || '' ;
        
        var tmpRetEl = el('div', { className: 'ui segment ' + tmpSegClasses}, null,
            tmpHdr,
            el('div', { className: 'edit-tabs' + props.attributes.color + ' ' + props.attributes.columns },
                [
                    el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['pressino/tab'], renderAppender: false }),
                ]
            ));
            
            return el('div',{}, tmpRetEl); 

        
    } else {
        
        var tmpTabsInfo = props.attributes.tabsinfo ? JSON.parse(props.attributes.tabsinfo) : '';
        var tmpTabLinkEls = [];

        for( var iPos in tmpTabsInfo ){
            var tmpTabInfo = tmpTabsInfo[iPos];
            tmpTabLinkEls.push(el('div',tmpTabInfo,tmpTabInfo.label));
        }
        var tmpMenuClass = 'mar0 pad0 ui top attached tabular menu ' + tmpInvertedClass;
        
        if( tmpAtts.labelpadding ){
            tmpMenuClass += ' ' + tmpAtts.labelpadding;
        }
        
        tmpTablinksEl = el('div',{className: tmpMenuClass}, tmpTabLinkEls);
        var tmpContents = el('div', {className:"ui segment theme-default-padding " + tmpTabsColor}, el('div', {className:tmpClass}, el(wp.blockEditor.InnerBlocks.Content)));
        
        var tmpTabsEl = el('div',{className: ''}, tmpContents);
        if( tmpAtts.bodyonly == true ){
            tmpTablinksEl = el('div');
            tmpTabsEl =  el(wp.blockEditor.InnerBlocks.Content);
        }
        
        return el('div',{}, tmpTablinksEl, tmpTabsEl);
    }


}