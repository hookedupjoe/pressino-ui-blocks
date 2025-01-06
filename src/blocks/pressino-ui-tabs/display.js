/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;
const { updateBlockAttributes } = wp.data.dispatch( 'core/block-editor' )

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
    const { attributes, setAttributes } = props;
    var tmpClass = getClass(attributes, true);
    const { color, inverted, groupname, tabsinfo, menuiconpos, labelpadding, 
        insidepadding, panelsinverted, bodyonly } = attributes;

    var tmpInvertedClass = '';
    if( inverted == true ){
        tmpInvertedClass = 'inverted'
    }
    var tmpTabsColor = color || '';

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
            //firsttabid = '';
            for( var iPos in tmpTabs){
                var tmpTab = tmpTabs[iPos];
               
                var tmpNeedToUpdate = false;
                var tmpTabUpdates = {};


                var tmpTabAtts = tmpTab.attributes;
                if( tmpTabAtts.parent_color != color ){
                    tmpNeedToUpdate = true;
                    tmpTabUpdates.parent_color = tmpTabsColor;
                }
                if( tmpTabAtts.parent_inverted != inverted ){
                    tmpNeedToUpdate = true;
                    tmpTabUpdates.parent_inverted = inverted;
                }
                if( tmpTabAtts.parent_panels_inverted != panelsinverted ){
                    tmpNeedToUpdate = true;
                    tmpTabUpdates.parent_panels_inverted = panelsinverted;
                }
                


                if( tmpNeedToUpdate ){
                    updateBlockAttributes(tmpTab.clientId, tmpTabUpdates);

                }
                tmpTabAtts.groupname = groupname;
                tmpTabAtts.tabpos = iPos;

                var tmpTabGroup = tmpTabAtts.groupname;
                var tmpTabItem = tmpTabAtts.itemname || 'tab-' + (iPos+1);
                var tmpTabLabel = tmpTabAtts.tablabel || '';
                // var tmpTabIcon = tmpTabAtts.iconname || '';
         
                // if( !(firsttabid)){
                //     firsttabid = tmpTabItem;
                // }
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
                    useicon: tmpTabAtts.useicon || false,
                    position: iPos
                };

                tmpTabLinks.push(tmpAddAtts)
            }
            var tmpTabLinkText = JSON.stringify(tmpTabLinks);
            if( tabsinfo != tmpTabLinkText ){
                setAttributes({tabsinfo: tmpTabLinkText});
//                tabsinfo = tmpTabLinkText;
//                PressinoUI.refreshBlockEditor();
            }
            
        } else {
            tabsinfo = '[]';
            //firsttabid = '';
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
            if( groupname != '' ){
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
            el('div', { className: 'edit-tabs ' + props.attributes.color + ' ' + props.attributes.columns },
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
            if( tmpTabInfo.useicon && tmpTabInfo.iconname ){
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
        if( menuiconpos == 'top' ){
            tmpInvertedClass += ' icon labeled'
        }
        // if(  props.attributes.color && ! props.attributes.blackback === true ){
        //     tmpInvertedClass += ' ' + props.attributes.color;
        // }
        var tmpMenuClass = 'ui top attached tabular menu ' + tmpInvertedClass;
        
        if( labelpadding ){
            tmpMenuClass += ' ' + labelpadding;
        }
        
        var tmpSegClass = '';
        if( insidepadding ){
            tmpSegClass = insidepadding;
        } 
        if( panelsinverted ){
            tmpSegClass += ' inverted';
        } 
        
        tmpTablinksEl = el('div',{className: tmpMenuClass}, tmpTabLinkEls);
        var tmpContents = el('div', {className:"ui segment attached theme-default-padding " + tmpSegClass + ' ' + tmpTabsColor}, el('div', {className:tmpClass}, el(wp.blockEditor.InnerBlocks.Content)));
        
        var tmpTabsEl = tmpContents;
        if( bodyonly == true ){
            tmpTablinksEl = '';
            tmpTabsEl =  el(wp.blockEditor.InnerBlocks.Content);
        }
        
        return el('div',{}, tmpTablinksEl, tmpTabsEl);
    }


}