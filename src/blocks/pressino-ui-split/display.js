/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: [],
	string: ['gridspacing'],
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('flo-wrap', classSpecs, theAtts, theIsEditMode);
    console.log('tmpClasses',tmpClasses);
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpAtt = props.attributes;
    var theProps = props;

    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    var newEl = function(theType, theClass, theEl){
        return el(theType, {className: theClass}, theEl);
    };

    var tmpContent = [];

    var tmpClass = getClass(theProps.attributes, editMode);
    var tmpTitle = '';
    if (tmpAtt.title) {
        tmpTitle = tmpAtt.title;
    }

    if (tmpAtts.parentColor) {
        //tmpClass += ' ' + tmpAtts.parentColor;
    } else if (tmpAtt.color) {
        tmpClass += ' ' + tmpAtt.color;
    }

    if( editMode ){
        tmpClass += ' fluid';
        // var tmpHM = 'Split';
        // if( tmpTitle ){
        //     tmpHM += ' [' + tmpTitle + ']';
        // } 
        // var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 grey small"}, tmpHM);
        // tmpContent.push(tmpEditHeader)

        // var tmpPrefix = el('div',{className: 'ui label grey right pointing'}, 'Split');
        // var tmpNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpTitle || '(no title)');

        // //var tmpHM = tmpTabLabel;
        // var tmpEditHeader = el('div', {className:"ui message pad8 grey small"}, tmpPrefix,tmpNameLabel);
        // tmpContent.push(tmpEditHeader)

       // tmpEditHeader
       

    }


    if (tmpAtt.mediaURL) {
        var tmpMediaAtts = { src: tmpAtt.mediaURL };
        if (tmpAtts.parentMaxImgHeight > 0) {
            tmpMediaAtts.style = { "height": tmpAtts.parentMaxImgHeight + "px", "object-fit": "cover" };
        }

        tmpContent.push(newEl('div', 'image', el('img', tmpMediaAtts)));
    }
    if (editMode && tmpTitle == '' && tmpAtt.mediaURL == '' && tmpAtt.subtitle == '' && tmpAtt.text == '') {
        //EDIT ONLY - Optionally include this?
        //tmpTitle = '** EDIT DETAILS ON SIDEBAR **';
    }
    var tmpMainContent = [];
    var tmpSub = [];
    var tmpHeaderSize = 'medium';
    var tmpHeaderColor = tmpAtts.color || tmpAtts.parentColor || '';
    var tmpInverted = '';
    var headeClass = ' actappui ';   tmpInverted = ' inverted ';
    if (tmpAtt.parentHeaderType == 'inverted') {
        var tmpItems = [];

        if (tmpAtt.subtitle) {
            tmpSub = newEl('div', 'subheader', tmpAtt.subtitle);
        }
        if (tmpTitle) {
            if (!(tmpHeaderColor)) {
                tmpHeaderColor = 'black';
            }
            tmpItems.push(newEl('div', 'ui header inverted  attached mar0 ' + headeClass + tmpHeaderSize, [tmpTitle, tmpSub]));
            tmpMainContent.push(newEl('div', '  ' + tmpInverted + tmpHeaderColor, [tmpItems]));
        }

    } else if (tmpAtt.parentHeaderType == 'light') {
        var tmpItems = [];

        if (tmpAtt.subtitle) {
            tmpSub = newEl('div', 'subheader', tmpAtt.subtitle);
        }
        if (tmpTitle) {
            tmpItems.push(newEl('div', 'ui header ' + tmpHeaderColor + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
            tmpMainContent.push(newEl('div', 'ui message attached mart0 marb0  '+ headeClass + tmpHeaderColor, [tmpItems]));

        }

    } else {
        var tmpItems = [];
        if (tmpAtt.subtitle) {
            tmpSub = newEl('div', 'subheader', tmpAtt.subtitle);
        }
        if (tmpTitle) {
            tmpItems.push(newEl('div', 'ui header ' + headeClass + tmpHeaderColor + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
            tmpMainContent.push(newEl('div', 'ui ' + tmpHeaderColor, [tmpItems]));
        }

    }

    if( tmpAtt.text ){
        tmpMainContent.push( newEl('div','description',tmpAtt.text) );
    }

    if (tmpMainContent.length > 0) {
        tmpContent.push(newEl('div', '', tmpMainContent));
    }
    let hasBottomCardByDefault = tmpParentAttributes.bottombydefault;
    var tmpTemplate = [ 
        [
            'pressino/splitcolumn',
            {ismain:true},
            []
        ],
        [
            'pressino/splitcolumn',
            {},
            []
        ]
    ];


    

    if (editMode) {
        tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks, {
            allowedBlocks: ['pressino/splitcolumn'], templateLock: false, renderAppender: false, norendetemplateLock: "insert",
            template: tmpTemplate
        })));
    } else {
        tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
    }

    var tmpExtraContent = [];
    // var tmpBtnBar = '';
    // if (editMode && props.isSelected) {
    //     var tmpBarContent = [];
    //     var tmpAddBtn = el('div', { className: 'ui compact button grey basic ', action: 'beAddElement', elementname: 'splitcolumn' }, 'Add Section');
    //     tmpBarContent.push(tmpAddBtn);
    //     tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid center aligned label grey' }, 'Split Control'), el('div', { className: 'ui segment raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
    // }
    tmpContent.push(tmpExtraContent);
    if (tmpAtt.url && !editMode) {
        var tmpOpts = { className: tmpClass, href: tmpAtts.url };
        if (tmpAtts.urlopentab) {
            tmpOpts.target = "_blank";
            //--- Important, without this it shows 
            tmpOpts.rel = "noopener";
        }
        return el('a', tmpOpts, tmpContent);
    } else {
        

        if (editMode) {
            return el('div', { className: tmpClass }, tmpContent);
        }

        return newEl('div', tmpClass, tmpContent);
    }
    
}