/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;
const { updateBlockAttributes } = wp.data.dispatch( 'core/block-editor' )

var classSpecs = {
    boolean: [],
	string: ['gridspacing', 'gridgap'],
}

function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('flo-wrap', classSpecs, attributes, isEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
    const { attributes } = props;
  
    var tmpContent = [];
    var tmpClass = getClass(attributes, editMode);
    const { stackwhen, splitratio } = attributes;
    var tmpTemplate = [ 
        [
            'pressino/splitcolumn',
            {},
            []
    ],
        [
            'pressino/splitcolumn',
            {},
            []
    ]
    ];


    
    
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
                if( tmpBlockAtts.parent_stackwhen != stackwhen ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_stackwhen = stackwhen;
                }
                if( tmpBlockAtts.parent_splitratio != splitratio ){
                    tmpNeedToUpdate = true;
                    tmpBlockUpdates.parent_splitratio = splitratio;
                }
                
               
                if( tmpNeedToUpdate ){
                    updateBlockAttributes(tmpBlock.clientId, tmpBlockUpdates);
                }
               
            }
           
            
        }
    }



    if (editMode) {
        tmpContent.push(el('div', {}, el(wp.blockEditor.InnerBlocks, {
            allowedBlocks: ['pressino/splitcolumn'], templateLock: false, renderAppender: false, norendetemplateLock: "insert",
            template: tmpTemplate
        })));
    } else {
        tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
    }

    if (editMode) {
        return el('div', { className: tmpClass }, tmpContent);
    }

    return el('div', { className: tmpClass }, tmpContent);
    
}