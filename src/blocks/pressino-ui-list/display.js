/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
import { getIconEl } from '../../icons';
 
var classSpecs = {
    boolean: ['relaxed','animated','divided','celled'],
	string: []
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui list', classSpecs, theAtts, theIsEditMode);
    
    if( theAtts.classes ){
        tmpClasses +=  ' ' + theAtts.classes;
    }
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpClass = getClass(props.attributes, true);

    if (editMode) {
        var tmpUIColor = ''; //was props.attributes.color || 
        var tmpHeaderText = 'UI List';
        var tmpIcon = PressinoUI.getControlImage();
        var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

        var tmpAddBtn = '';
        var tmpBtnBar = ''
        if (props.isSelected) {
            tmpAddBtn = el('div', { className: 'ui compact button basic grey ', elementname: 'card', action: 'pressinoAddElement' }, 'Add Card');
            // tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
            //     tmpAddBtn
            // ], el('div', { className: 'endfloat' }));
            
        }
        tmpUIColor = 'grey';
        var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpIcon, tmpHeaderMsg);

        return el('div', { className: 'ui segment ' + tmpAtts.color || '' }, null,
            tmpHdr,
            el('div', { className: 'edit-cards' + tmpAtts.color + ' ' + tmpAtts.columns },
                [
                    el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['pressino/listitem'], renderAppender: wp.blockEditor.InnerBlocks.DefaultBlockAppender }),
                ]
            )

        )
    } else {
        var tmpProps = {className: tmpClass};
        return el('div', tmpProps, el(wp.blockEditor.InnerBlocks.Content));
    }
   

}