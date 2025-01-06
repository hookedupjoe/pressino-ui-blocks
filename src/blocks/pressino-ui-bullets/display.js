/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el, LinkFormat } from '../../pressino-ui';
import { getIconClass } from '../../icons';

var classSpecs = {
    boolean: ['flat'],
	string: ['classes','bulletcolor','bulletspacing'],
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('', classSpecs, theAtts, theIsEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
        var tmpAtts = props.attributes;
        const {iconname, icontype, bullettype, bulletsize, textsize} = tmpAtts;
        
        var tmpClass = getClass(props.attributes, true);
        var tmpLinkFormats = LinkFormat.getDisplayInfo(props);
        tmpClass += tmpLinkFormats?.className || '';


        if( bullettype && bullettype != 'basic' && bullettype != 'icon'){
            tmpClass += ' ' + bullettype;
        }
        if( bulletsize && bullettype != 'none' && bullettype != 'basic'){
            tmpClass += ' ' + 'icon'+bulletsize;
        }
        if( textsize ){
            tmpClass += ' ' + 'text'+textsize;
        }
        if( iconname && icontype && bullettype == 'icon' ){
            tmpClass += ' ' + getIconClass({iconname, icontype, isForSubItem: true});
        }

        var tmpProps = {className: tmpClass};
        if( tmpLinkFormats?.domAtts?.linkformat ){
            tmpProps = {...tmpProps,...tmpLinkFormats.domAtts}
        }

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
            var tmpUIColor = ''; 
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
