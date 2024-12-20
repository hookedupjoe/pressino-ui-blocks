/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el, attNamesMedia } from '../../pressino-ui';

var classSpecs = {
	boolean: ['rounded', 'circular', 'bordered', 'centered', 'spaced'],
    string: ['size', 'color', 'alignmentvertical','margin','padding','classes']
}


function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('ui image ', classSpecs, theAtts, theIsEditMode);
    
    if( !theAtts.fluid && theAtts.size ){
        tmpClasses += ' ' + theAtts.size;
    }
    tmpClasses = tmpClasses.trim().replace('  ',' ')
	return tmpClasses
}

export default function display({ props, attributes, editMode }) {
    let theProps = props;
    let classNames = getClass(attributes,editMode);
    let tmpContent = [];
    var tmpAtts = attributes;

    if (tmpAtts.float) {
        //--- Only do float for final so the image doesn't fly around in edit mode
        //if (!editMode) {
            classNames += ' ' + tmpAtts.float;
        //}
    }
    var tmpEl = <img className={classNames} src={tmpAtts.mediaURL} />;
    
    if(editMode === true){
        if (tmpAtts.float) {
            tmpEl = <div className='clear-both-after'>{tmpEl}</div>;
        }

        if (!(tmpAtts.mediaURL)) {

            var onSelectImage = function (media) {
                let tmpToSet = {};
                tmpToSet[attNamesMedia['mediaURL']] = media.url;
                tmpToSet[attNamesMedia['mediaID']] = media.id;
                return theProps.setAttributes(tmpToSet);

            };

            tmpEl = el(wp.blockEditor.MediaUpload, {
                onSelect: onSelectImage,
                type: 'image',
                value: '',
                render: function (obj) {
                    if (!tmpAtts.mediaID) {
                        return el('div', { className: 'pad2' },
                            el('div', { className: 'ui button blue basic', onClick: obj.open }, 'Select Image')
                        )
                    } else {
                        return el('div', { className: 'pad2' }, '')
                    }
                }
            })
        }

        tmpContent.push(tmpEl);
    } else {
        if (tmpAtts.url) {
            var tmpOpts = { className: classNames, href: tmpAtts.url };
            if (tmpAtts.urlopentab) {
                tmpOpts.target = "_blank";
                //--- Important, without this it shows 
                tmpOpts.rel = "noopener";
            }
            tmpEl = el('a', tmpOpts, tmpEl);
        }
        tmpContent = tmpEl
    }

    return tmpContent;
}