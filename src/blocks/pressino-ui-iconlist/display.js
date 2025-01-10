/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
 
var classSpecs = {
    boolean: ['celled','separated'],
	string: ['size']
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('pui imgwrap-list', classSpecs, theAtts, theIsEditMode);
    if( theAtts.classes ){
        tmpClasses +=  ' ' + theAtts.classes;
    }
	return tmpClasses
}

export default function display({ props, editMode }) {
    var tmpAtts = props.attributes;
    var tmpClass = getClass(tmpAtts, true);
    var theProps = props;

    if (editMode) {
        var tmpUIColor = ''; //was props.attributes.color || 
        var tmpHeaderText = 'UI Icon List';
        var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

        tmpUIColor = 'grey';
        var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpHeaderMsg);
        var tmpTemplate = [ [
            'pressino/iconlistitem',
            {},
            []
        ]];
        return el('div', { className: 'ui segment pad3 mar0 ' + theProps.attributes.color || '' }, null,
            tmpHdr,
            el('div', { className: 'edit-grid' + props.attributes.color  },
                [
                    el(wp.blockEditor.InnerBlocks, { template: tmpTemplate, allowedBlocks: ['pressino/iconlistitem'], renderAppender: wp.blockEditor.InnerBlocks.DefaultBlockAppender }),
                ]
            )

        )
    } else {
        
        var tmpNewAtts = {className: tmpClass};
        // if (props.attributes.mincolwidth) {
        //     tmpNewAtts["mincolwidth"] = props.attributes.mincolwidth;
        // }

        return el('div', tmpNewAtts, el(wp.blockEditor.InnerBlocks.Content));
    }


}