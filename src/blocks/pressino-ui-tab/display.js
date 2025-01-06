/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: [],
    string: []
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui ', classSpecs, theAtts, theIsEditMode);
    
    if( theAtts.classes ){
        tmpClasses = tmpClasses.trim().replace('  ',' ') + ' ' + theAtts.classes;
    }
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpClass = getClass(tmpAtts, true);
    var tmpAtts = props.attributes;

        var tmpAtts = props.attributes;

        var tmpItemName = tmpAtts.itemname || ''
        var tmpContent = [];
        var tmpClass = getClass(props, editMode);

        if( tmpAtts.classes ){
            tmpClass += ' ' + tmpAtts.classes;
        }

        if (editMode) {
            tmpContent.push(el('div', {}, el(wp.blockEditor.InnerBlocks,{})));
        } else {
            tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        var tmpExtraContent = [];
       
        tmpContent.push(tmpExtraContent);
        
        var tmpNewElAtts = {
            className: tmpClass,
            appuse: 'cards',
            item: tmpItemName,
            group: tmpAtts.groupname || '',
        }

        if (editMode) {
            return el('div', tmpNewElAtts, [el('div', {classname: tmpClass}, [tmpContent])]);
        }

        if(!tmpAtts.ismain){
          tmpNewElAtts.className += ' hidden';
        }
        return el('div', tmpNewElAtts, tmpContent);
}