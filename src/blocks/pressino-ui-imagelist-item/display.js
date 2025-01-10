/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: ['centered','flexgrowbox'],
    string: []
}


function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('item', classSpecs, attributes, isEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
    var { attributes } = props;
    const { mediaURL,parent_useicon, parent_size, parent_imagestyle } = attributes;

    var tmpContent = [];
    var tmpClass = getClass(attributes, editMode);
    var tmpIconEl = <div class="imgwrap">
        <img class="ui image bordered mini" src="https://pressino.com/wp-content/uploads/2025/01/gimp-tool-move.png" alt="" />
    </div>;

    if (!parent_useicon && mediaURL) {
        var tmpMClassName = 'ui image';
        if( parent_imagestyle ){
            tmpMClassName += ' ' + parent_imagestyle;
        }
        var tmpMediaAtts = { src: mediaURL, className: tmpMClassName };
        tmpIconEl = el('div', {className: 'imgwrap'}, el('img', tmpMediaAtts));
    }

    if (editMode) {
        var tmpViewContent = [];
        var tmpInnerContent = el(wp.blockEditor.InnerBlocks,{});

        tmpViewContent.push(<table className={"ui table nopad basic celled pui image-list " + parent_size || 'small' } cellpadding="0" cellspacing="0"  width="100%"><tr><td width="10">{tmpIconEl}</td><td>{tmpInnerContent}</td></tr></table>)
        tmpContent.push(tmpViewContent);

        return el('div', { }, tmpContent);
    } else {
        tmpContent.push(tmpIconEl);
        tmpContent.push(el('div', {className: 'content'}, el(wp.blockEditor.InnerBlocks.Content)));
        return el('div', { className: tmpClass }, tmpContent);
    }

    // var tmpExtraContent = [];
   
    // tmpContent.push(tmpExtraContent);
    // var tmpOutterEl = el('div', {className: tmpClass}, tmpContent );
   
    
}