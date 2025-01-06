/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: ['fluid', 'raised'],
	string: ['color'],
}


function getClass(attributes, isEditMode) {
	return PressinoUI.getStandardClass('ui card ', classSpecs, attributes, isEditMode);
}

export default function display({ props, editMode }) {
    var attributes = props.attributes;
    const { title, color, mediaURL, parentHeaderType, subtitle, text, url, parentMaxImgHeight, parentColor } = attributes;
    var theProps = props;

    var tmpParentAttributes = PressinoUI.getParentAttributes(props.clientId);
    var newEl = function(theType, theClass, theEl){
        return el(theType, {className: theClass}, theEl);
    };

    var tmpContent = [];

    var tmpClass = getClass(theProps.attributes, editMode);
    var tmpTitle = '';
    if (title) {
        tmpTitle = title;
    }

    if (color) {
        tmpClass += ' ' + color;
    }

    if( editMode ){
        tmpClass += ' fluid';

        var tmpPrefix = el('div',{className: 'ui label grey right pointing'}, 'Card');
        var tmpNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpTitle || '(no title)');

        var tmpEditHeader = el('div', {className:"ui message pad8 grey small"}, tmpPrefix,tmpNameLabel);
        tmpContent.push(tmpEditHeader)

    }


    if (mediaURL) {
        var tmpMediaAtts = { src: mediaURL };
        if (parentMaxImgHeight > 0) {
            tmpMediaAtts.style = { "height": parentMaxImgHeight + "px", "object-fit": "cover" };
        }

        tmpContent.push(newEl('div', 'image', el('img', tmpMediaAtts)));
    }
    var tmpMainContent = [];
    var tmpSub = [];
    var tmpHeaderSize = 'medium';
    var tmpHeaderColor = color || parentColor || '';
    var tmpInverted = '';
    var headeClass = ' actappui ';
    tmpInverted = ' inverted ';
    if (parentHeaderType == 'inverted') {
        var tmpItems = [];

        if (subtitle) {
            tmpSub = newEl('div', 'subheader', subtitle);
        }
        if (tmpTitle) {
            if (!(tmpHeaderColor)) {
                tmpHeaderColor = 'black';
            }
            tmpItems.push(newEl('div', 'ui header inverted mar0 ' + headeClass + tmpHeaderSize, [tmpTitle, tmpSub]));
            tmpMainContent.push(newEl('div', ' ui segment pad0 mar0 basic ' + tmpInverted + tmpHeaderColor, [tmpItems]));
        }

    } else if (parentHeaderType == 'light') {
        var tmpItems = [];

        if (subtitle) {
            tmpSub = newEl('div', 'subheader', subtitle);
        }
        if (tmpTitle) {
            tmpItems.push(newEl('div', 'ui header ' + tmpHeaderColor + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
            tmpMainContent.push(newEl('div', 'ui message attached mart0 marb0  '+ headeClass + tmpHeaderColor, [tmpItems]));
        }

    } else {
        var tmpItems = [];
        if (subtitle) {
            tmpSub = newEl('div', 'subheader', subtitle);
        }
        if (tmpTitle) {
            tmpItems.push(newEl('div', 'ui header ' + headeClass + tmpHeaderColor + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
            tmpMainContent.push(newEl('div', 'ui ' + tmpHeaderColor, [tmpItems]));
        }
    }

    if( text ){
        tmpMainContent.push( newEl('div','description',text) );
    }

    if (tmpMainContent.length > 0) {
        tmpContent.push(newEl('div', '', tmpMainContent));
    }
    let hasBottomCardByDefault = tmpParentAttributes.bottombydefault;
    var tmpTemplate = [ [
        'pressino/cardsection',
        {extra: false},
        [

        ]
    ]];

    if( hasBottomCardByDefault ){
        tmpTemplate.push([
            'pressino/cardsection',
            {
                extra: true, 
                padding: 'pad0'
            },
            [
    
            ]
        ])
    }

    if (editMode) {
        tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks, {
            allowedBlocks: ['pressino/cardsection'], renderAppender: false, norendetemplateLock: "insert",
            template: tmpTemplate
        })));
    } else {
        tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
    }

    var tmpExtraContent = [];
    tmpContent.push(tmpExtraContent);
    if (url && !editMode) {
        var tmpOpts = { className: tmpClass, href: url };
        if (urlopentab) {
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