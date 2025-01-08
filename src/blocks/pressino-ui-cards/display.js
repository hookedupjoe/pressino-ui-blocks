/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;
const { updateBlockAttributes } = wp.data.dispatch( 'core/block-editor' )

var classSpecs = {
    boolean: ['centered'],
	string: ['color','cardspacing', 'classes']
}

function getClass(attributes, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui cards', classSpecs, attributes, theIsEditMode);
	return tmpClasses;
}

export default function display({ props, editMode }) {
    var tmpClass = getClass(props.attributes, true);
    const { attributes } = props;
    const { color, columns, imageheight, headertype } = attributes;


    
    if (editMode){
        const { clientId } = props;
        const tmpBlocks = useSelect(
            (select) => select(blockEditorStore).getBlock(clientId).innerBlocks,
        );
        
        if(tmpBlocks.length){
            for( var iPos in tmpBlocks){
                var tmpBlock = tmpBlocks[iPos];

                var tmpNeedToUpdate = false;
                var tmpBlockUpdates = {};

                var tmpBlockAtts = tmpBlock.attributes;
                if( tmpBlockAtts.parent_color != color ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_color = color;
                }
                if( tmpBlockAtts.parent_imageheight != imageheight ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_imageheight = imageheight;
                }
                if( tmpBlockAtts.parent_headertype != headertype ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_headertype = headertype;
                }

                if( tmpNeedToUpdate ){
                    updateBlockAttributes(tmpBlock.clientId, tmpBlockUpdates);
                }

               
            }
           
            
        }
    }


    if (editMode) {
        var tmpUIColor = ''; 
        var tmpHeaderText = 'UI Cards Container';
        var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

        var tmpTemplate = [ [
            'pressino/card',
            {},
            [
    
            ]
        ]];

        var tmpAddBtn = '';
        if (props.isSelected) {
            tmpAddBtn = el('div', { className: 'ui compact button basic grey ', elementname: 'card', action: 'pressinoAddElement' }, 'Add Card');
        }
        tmpUIColor = 'grey';
        var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpHeaderMsg);

        return el('div', { className: 'ui segment pad3 mar0 ' + color || '' }, null,
            tmpHdr,
            el('div', { className: 'edit-cards' + color + ' ' + columns },
                [
                    el(wp.blockEditor.InnerBlocks, { template: tmpTemplate, allowedBlocks: ['pressino/card'], renderAppender: false }),
                ]
            )
        )
    } else {
        if ((props.attributes.columns)) {
            tmpClass += ' stackable ' + (props.attributes.columns || '');
        }
        var tmpProps = {className: tmpClass};
        if (!(props.attributes.columns)) {
            tmpProps["auto-adapt"] = "cards";
        } else {
            tmpProps["columns"] = props.attributes.columns;
        }
        if (props.attributes.mincolwidth) {
            tmpProps["mincolwidth"] = props.attributes.mincolwidth;
        }
        return el('div', tmpProps, el(wp.blockEditor.InnerBlocks.Content));
    }
   


}