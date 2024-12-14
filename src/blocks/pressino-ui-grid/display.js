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
    var tmpClass = getClass(props, true);
    var theProps = props;

        if (editMode) {
            var tmpUIColor = ''; //was props.attributes.color || 
            var tmpHeaderText = 'UI Grid';
            var tmpIcon = PressinoUI.getControlImage();
            var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

          

            var tmpAddBtn = '';
            var tmpBtnBar = ''
            if (props.isSelected) {
                tmpAddBtn = el('div', { className: 'ui compact button basic grey ', elementname: 'gridcolumn', action: 'pressinoAddElement' }, 'Add Column');
                tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
                    tmpAddBtn
                ], el('div', { className: 'endfloat' }));
                
            }
            tmpUIColor = 'grey';
            var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpIcon, tmpHeaderMsg, tmpBtnBar);

            return el('div', { className: 'ui segment ' + theProps.attributes.color || '' }, null,
                tmpHdr,
                el('div', { className: 'edit-grid' + props.attributes.color + ' ' + props.attributes.columns },
                    [
                        el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['pressino/gridcolumn'], renderAppender: false }),
                    ]
                )

            )
        } else {
            return el('div', {className:tmpClass}, el(wp.blockEditor.InnerBlocks.Content));
        }
   

}