/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
	boolean: ['dividing','block','inverted'],
    string: ['color', 'attached','margin','bottommargin','padding', 'classes']
}


export function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui header ', classSpecs, attributes, isEditMode);
    const { fluid, size, useicon, alignment, iconontop } = attributes;

    if( !fluid && size ){
        tmpClasses += ' ' + size;
    }
    //--- Only use alignment if icon is not in use
    if( !useicon && alignment ){
        tmpClasses += ' ' + alignment;
    }
    if( useicon && iconontop ){
        tmpClasses += ' icon center aligned'
    }
    tmpClasses = tmpClasses.trim().replace('  ',' ')
	return tmpClasses
}

export function getExtraContent(attributes) {
    var tmpContent = [];
    if( attributes.subtext != '' ){
        tmpContent.push( el('div',{className:'ui sub header'},attributes.subtext) );
    }
    return tmpContent;
}

export default function display({ attributes, editMode }) {
        const { iconontop, useicon, iconname } = attributes;
        var tmpCN = getClass(attributes, true);
        
        var tmpAtts = attributes;
        var tmpText = tmpAtts.text;
        if( editMode ){
            if(  (!(tmpAtts.text || tmpAtts.subtext))){
                tmpCN = ''; //---- Do not use header class - showing a message instead
                tmpText = <div class="ui segment basic right aligned pad0 mar0"><div class="ui right pointing label orange">Add header text in sidebar</div></div>;
            }

        }

        var tmpExtraEl = '';
        if( useicon && iconname){
            tmpExtraEl = PressinoUI.getIconEl(attributes);
            if( iconontop ){
                tmpCN += ' icon';
            }
        }

        var tmpContent = getExtraContent(attributes);
        
        var tmpDisplayObject = el('h2',{className:tmpCN},tmpExtraEl, el('div', {className: 'content'}, [tmpText,tmpContent]));
        return tmpDisplayObject;
}
