/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
	boolean: ['dividing','block','inverted'],
    string: ['color','size', 'attached', 'alignment','margin','bottommargin','padding', 'classes']
}


export function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui header ', classSpecs, theAtts, theIsEditMode);
    
    if( !theAtts.fluid && theAtts.size ){
        tmpClasses += ' ' + theAtts.size;
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
        const { alignment, attached, block } = attributes;
        var tmpCN = getClass(attributes, true);
        var tmpAtts = attributes;
        var tmpText = tmpAtts.text;
        if( editMode ){
            if(  (!(tmpAtts.text || tmpAtts.subtext))){
                tmpText = '(blank) - Update in settings sidebar';
            }
        }
        var tmpContent = !attached && !block && getExtraContent(attributes);
        
        var tmpDisplayObject = el('h2',{className:tmpCN},[tmpText,tmpContent]);
        return tmpDisplayObject;
}
