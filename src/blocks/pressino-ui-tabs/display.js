/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;
 
var classSpecs = {
	boolean: [],
	string: ['padding']
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
    var tmpClass = getClass(tmpAtts, true);

    var tmpInvertedClass = '';
    if( tmpAtts.inverted == true ){
        tmpInvertedClass = 'inverted'
    }
    var tmpTabsColor = tmpAtts.color || '';

    var tmpTablinksEl = (el('div',{},''));
    if( editMode ){
        //var tmpMe = PressinoUI.getBlockInEditor(props);

        const { clientId } = props;
        const tmpTabs = useSelect(
            (select) => select(blockEditorStore).getBlock(clientId).innerBlocks,
        );
       // var tmpTabs = tmpMe.innerBlocks;
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
                var tmpTabLabel = tmpTabAtts.tablabel || '';
                // var tmpTabIcon = tmpTabAtts.iconname || '';
         
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
                    iconname: tmpTabAtts.iconname || '',
                    icontype: tmpTabAtts.icontype || '',
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
       
        var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor },  tmpHeaderMsg);
        var tmpSegClasses = props.attributes.color || '' ;
        
        var tmpRetEl = el('div', { className: 'ui segment pad3 mar0 ' + tmpSegClasses}, null,
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
            var tmpIconEl = '';
            if( tmpTabInfo.iconname ){
                tmpIconEl = PressinoUI.getIconEl(tmpTabInfo);
                if( ! tmpTabInfo.label ){
                    tmpTabInfo.className += ' icon';
                }
            }
            delete tmpTabInfo.iconname;
            delete tmpTabInfo.icontype;



            tmpTabLinkEls.push(el('div',tmpTabInfo,tmpIconEl, tmpTabInfo.label));
        }

        tmpInvertedClass += ' withicon'
        var tmpMenuClass = 'ui top attached tabular menu ' + tmpInvertedClass;
        
        if( tmpAtts.labelpadding ){
            tmpMenuClass += ' ' + tmpAtts.labelpadding;
        }
        
        var tmpSegClass = '';
        if( tmpAtts.insidepadding ){
            tmpSegClass = tmpAtts.insidepadding;
        } 
        if( tmpAtts.panelsinverted ){
            tmpSegClass += ' inverted';
        } 
        
        tmpTablinksEl = el('div',{className: tmpMenuClass}, tmpTabLinkEls);
        var tmpContents = el('div', {className:"ui segment attached theme-default-padding " + tmpSegClass + ' ' + tmpTabsColor}, el('div', {className:tmpClass}, el(wp.blockEditor.InnerBlocks.Content)));
        
        var tmpTabsEl = tmpContents;
        if( tmpAtts.bodyonly == true ){
            tmpTablinksEl = '';
            tmpTabsEl =  el(wp.blockEditor.InnerBlocks.Content);
        }
        
        return el('div',{}, tmpTablinksEl, tmpTabsEl);
    }


}