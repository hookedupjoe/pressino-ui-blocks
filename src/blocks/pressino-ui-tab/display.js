/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: [],
    string: []
}

function getClass(theAtts, theIsEditMode) {
    //--- Added clearing so that content stays inside, no logical reason to use it other ways
    var tmpClasses = PressinoUI.getStandardClass('ui ', classSpecs, theAtts, theIsEditMode);
    
    if( theAtts.classes ){
        tmpClasses = tmpClasses.trim().replace('  ',' ') + ' ' + theAtts.classes;
    }
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpClass = getClass(props, true);
    var tmpAtts = props.attributes;

        var tmpAtts = props.attributes;

        var tmpItemName = tmpAtts.itemname || ''
        var tmpTabLabel = tmpAtts.tablabel || '';
        var tmpContent = [];
        var tmpClass = getClass(props, editMode);
        // if( editMode ){
        //     tmpClass += ' fluid';
        // }
      
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
        
        var tmpTabPos = parseInt(tmpAtts.tabpos);
        var tmpNewElAtts = {
            className: tmpClass,
            appuse: 'cards',
            item: tmpItemName,
            group: tmpAtts.groupname || '',
        }

        if (editMode) {
            return el('div', tmpNewElAtts, [el('div', {classname: tmpClass}, [tmpContent])]);
        }

        //--- Why do they stick?
        if(tmpTabPos > 0 ){
            tmpNewElAtts.className += ' xhidden';
        }
        return el('div', tmpNewElAtts, tmpContent);
}