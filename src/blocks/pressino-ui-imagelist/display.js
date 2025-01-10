/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;
const { updateBlockAttributes } = wp.data.dispatch( 'core/block-editor' )

var classSpecs = {
    boolean: ['dividing','middle','centered'],
	string: ['size']
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('pui image-list', classSpecs, theAtts, theIsEditMode);
    if( theAtts.classes ){
        tmpClasses +=  ' ' + theAtts.classes;
    }
	return tmpClasses
}

export default function display({ props, editMode }) {
    const { attributes } = props;
    var tmpClass = getClass(attributes, true);
    var theProps = props;
    const { size, useicon, stackat } = attributes;
    tmpClass += ' ' + (useicon ? 'icon' : 'image');

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
                if( tmpBlockAtts.parent_size != size ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_size = size;
                }
                if( tmpBlockAtts.parent_useicon != useicon ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_useicon = useicon;
                }
               
                if( tmpNeedToUpdate ){
                    updateBlockAttributes(tmpBlock.clientId, tmpBlockUpdates);
                }

               
            }
           
            
        }
    }
    

    if (editMode) {
        var tmpUIColor = ''; //was props.attributes.color || 
        var tmpHeaderText = 'UI Image List';
        var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

        tmpUIColor = 'grey';
        var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpHeaderMsg);
        var tmpTemplate = [ [
            'pressino/imagelistitem',
            {},
            []
        ]];
        return el('div', { className: 'ui segment pad3 mar0 ' + theProps.attributes.color || '' }, null,
            tmpHdr,
            el('div', { className: 'edit-grid' + ' ' + tmpClass  },
                [
                    el(wp.blockEditor.InnerBlocks, { template: tmpTemplate, allowedBlocks: ['pressino/imagelistitem'], renderAppender: wp.blockEditor.InnerBlocks.DefaultBlockAppender }),
                ]
            )

        )
    } else {
        
        var tmpNewAtts = {className: tmpClass};
        var tmpStackAt = 0;

        if (stackat) {
            tmpStackAt = stackat;
        } else {
            // //--- Use Defaults
            // if( !(size == 'mini' || size == 'mini' || size == 'tiny' || size == 'small' || size == 'medium') ){
            //     tmpStackAt = 450;
            // }
            if( size == 'medium' || size == 'large' ){
                tmpStackAt = 420;
            } else if( size == 'big' || size == 'huge' || size == 'massive' ){
                tmpStackAt = 700;
            }
        }
        if( tmpStackAt ){
            //--- Only trigger the action if needed
            tmpNewAtts["stackat"] = tmpStackAt;
            tmpNewAtts["auto-adapt"] = "stackable";
        }
    
        return el('div', tmpNewAtts, el(wp.blockEditor.InnerBlocks.Content));
    }


}