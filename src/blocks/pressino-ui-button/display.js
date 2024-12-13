/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
	boolean: ['fluid','compact','basic','circular'],
	string: ['color','size', 'attached', 'float', 'classes','padding','margin','bottommargin']
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui button ', classSpecs, theAtts, theIsEditMode);
	return tmpClasses
}

export default function display({ attributes, editMode }) {
        var tmpCN = getClass(attributes, true);
        var tmpAtts = attributes;
        var tmpText = tmpAtts.text;

        var tmpEl = el('div',{className:tmpCN},[tmpText]);
        
        if(!editMode){
            if (tmpAtts.url) {
                var tmpOpts = { className: 'ui link', href: tmpAtts.url };
                if (tmpAtts.urlopentab) {
                    tmpOpts.target = "_blank";
                    //--- Important, without this it shows 
                    tmpOpts.rel = "noopener";
                }
                tmpEl = el('a', tmpOpts, tmpEl);
            }

        }

        return tmpEl;
}
