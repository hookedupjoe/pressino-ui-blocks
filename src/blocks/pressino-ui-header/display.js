/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
	boolean: ['dividing','block','inverted'],
    string: ['color','size', 'attached', 'alignment','margin','bottommargin','padding', 'classes']
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui header ', classSpecs, theAtts, theIsEditMode);
    
    if( !theAtts.fluid && theAtts.size ){
        tmpClasses += ' ' + theAtts.size;
    }
    tmpClasses = tmpClasses.trim().replace('  ',' ')
	return tmpClasses
}

export default function display({ attributes, editMode }) {
        var tmpCN = getClass(attributes, true);
        var tmpAtts = attributes;
        var tmpText = tmpAtts.text;
        if( editMode ){
            if(  (!(tmpAtts.text || tmpAtts.subtext))){
                tmpText = '(blank) - Update in settings sidebar';
            }
        }
        var tmpContent = [];
        if( tmpAtts.subtext != '' ){
            tmpContent.push( el('div',{className:'ui sub header'},tmpAtts.subtext) );
        }
        
        var tmpDisplayObject = el('div',{className:tmpCN},[tmpText,tmpContent]);
        return tmpDisplayObject;
}
