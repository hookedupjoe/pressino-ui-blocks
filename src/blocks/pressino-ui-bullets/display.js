/**
 * Return universal display element used by edit and save functions
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: [],
	string: ['classes'],
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('', classSpecs, theAtts, theIsEditMode);
	return tmpClasses
}



export default function display({ props, editMode }) {
        var tmpAtts = props.attributes;
        const {bullettype} = tmpAtts;

        var tmpClass = getClass(props.attributes, true);
        if( bullettype && bullettype != 'basic' && bullettype != 'icon'){
            tmpClass += ' ' + bullettype;
        }

        var tmpProps = {className: tmpClass};
        //--- If no bullets ..
        if( bullettype !== 'basic' ){
            tmpProps.appuse = 'iconlist';
        }
    
        var template = [ [
            'core/list',
            {},
            [
    
            ]
        ]];

        if (editMode) {
            var tmpUIColor = ''; //was props.attributes.color || 
            var tmpHeaderText = 'UI Bullets';
            var tmpIcon = PressinoUI.getControlImage();
            var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)
        
           
            tmpUIColor = 'grey';
            var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpHeaderMsg);
        
            return el('div', { className: 'ui segment pad3 mar0 ' + tmpAtts.color || '' }, null,
                tmpHdr,
                el('div', tmpProps,
                    [
                        el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['pressino/listitem'], template, templateLock: true }),
                    ]
                )
        
            )
        } else {
            
            return el('div', tmpProps, el(wp.blockEditor.InnerBlocks.Content));
        }

       
    
    }
