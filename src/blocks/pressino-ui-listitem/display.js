/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: [],
	string: [],
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('item ', classSpecs, theAtts, theIsEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpAtt = props.attributes;
    var theProps = props;

    // var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    var newEl = function(theType, theClass, theEl){
        return el(theType, {className: theClass}, theEl);
    };

    var tmpContent = [];

    var tmpClass = getClass(theProps, editMode);
    

    if( editMode ){
//        tmpClass += ' fluid';

        var tmpPrefix = el('div',{className: 'ui label grey right pointing'}, 'Item');
        var tmpNameLabel = '';//el('div',{className: 'ui label grey basic  padr10'}, tmpTitle || '(no title)');

        //var tmpHM = tmpTabLabel;
        var tmpEditHeader = el('div', {className:"ui message pad8 grey small"}, tmpPrefix,tmpNameLabel);
        tmpContent.push(tmpEditHeader)

       // tmpEditHeader
       

    }


   
    var tmpMainContent = [];

    if (tmpMainContent.length > 0) {
        tmpContent.push(newEl('div', '', tmpMainContent));
    }
    // let hasBottomCardByDefault = tmpParentAttributes.bottombydefault;
    var tmpTemplate = [  [
        'pressino/listitemsection',
        {},
        [

        ]
    ]];
   

    // if( hasBottomCardByDefault ){
    //     tmpTemplate.push([
    //         'pressino/cardsection',
    //         {
    //             extra: true, 
    //             padding: 'pad0'
    //         },
    //         [
    
    //         ]
    //     ])
    // }

    

    if (editMode) {
        tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks, {
            allowedBlocks: ['pressino/listitemsection'], renderAppender: false, norendetemplateLock: "insert",
            template: tmpTemplate
        })));
    } else {
        tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
    }

    // var tmpExtraContent = [];
    // // var tmpBtnBar = '';
    // // if (editMode && props.isSelected) {
    // //     var tmpBarContent = [];
    // //     var tmpAddBtn = el('div', { className: 'ui compact button grey basic ', action: 'beAddElement', elementname: 'cardsection' }, 'Add Section');
    // //     tmpBarContent.push(tmpAddBtn);
    // //     tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid center aligned label grey' }, 'Card Control'), el('div', { className: 'ui segment raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
    // // }
    // tmpContent.push(tmpExtraContent);
    if (editMode) {
        return el('div', { className: tmpClass }, tmpContent);
    }

    return newEl('div', tmpClass, tmpContent);
    
}