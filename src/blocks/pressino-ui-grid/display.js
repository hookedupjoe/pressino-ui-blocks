/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;
 
var classSpecs = {
    boolean: ['centered'],
	string: ['gridspacing']
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui grid', classSpecs, theAtts, theIsEditMode);
    
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
            var tmpHeaderText = 'UI Grid';
            var tmpIcon = PressinoUI.getControlImage();
            var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

          

            // var tmpAddBtn = '';
            // var tmpBtnBar = ''
            // if (props.isSelected) {
            //     tmpAddBtn = el('div', { className: 'ui compact button basic grey ', elementname: 'gridcolumn', action: 'pressinoAddElement' }, 'Add Column');
            //     tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
            //         tmpAddBtn
            //     ], el('div', { className: 'endfloat' }));
                
            // }
            tmpUIColor = 'grey';
            var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpHeaderMsg);

            return el('div', { className: 'ui segment pad3 mar0 ' + theProps.attributes.color || '' }, null,
                tmpHdr,
                el('div', { className: 'edit-grid' + props.attributes.color + ' ' + props.attributes.columns },
                    [
                        el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['pressino/gridcolumn'], renderAppender: wp.blockEditor.InnerBlocks.DefaultBlockAppender }),
                    ]
                )

            )
        } else {
            if ((props.attributes.columns)) {
                tmpClass += ' stackable ' + (props.attributes.columns || '');
            }
            var tmpNewAtts = {className: tmpClass};
            if (!(props.attributes.columns)) {
                tmpNewAtts["auto-adapt"] = "grid";
            } else {
                tmpNewAtts["columns"] = props.attributes.columns;
            }
            if (props.attributes.mincolwidth) {
                tmpNewAtts["mincolwidth"] = props.attributes.mincolwidth;
            }
    
            return el('div', tmpNewAtts, el(wp.blockEditor.InnerBlocks.Content));
        }
   

}