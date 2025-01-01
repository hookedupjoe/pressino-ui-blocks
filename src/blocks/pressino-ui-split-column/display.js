/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
import { InnerBlocks } from '@wordpress/block-editor';

var classSpecs = {
    boolean: ['extra'],
	string: ['padding','margin']
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('flo-wrap flo-10-5  flo-side-e', classSpecs, theAtts, theIsEditMode);
    return tmpClasses
}

export default function display({ attributes, editMode }) {

    let classNames = getClass(attributes,editMode);
   
    if(editMode === true){
        var tmpContent = [];
        var tmpName = attributes.ismain ? 'Main Panel' : 'Side Panel';
        var tmpPrefix = el('div',{className: 'ui label grey right pointing'}, 'Split Column');
        var tmpNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpName);

        //var tmpHM = tmpTabLabel;
        var tmpEditHeader = el('div', {className:"ui message pad8 grey small"}, tmpPrefix, tmpNameLabel);
        tmpContent.push(tmpEditHeader)

        tmpContent.push(<div className={classNames} >
            <InnerBlocks />
        </div>)
        
        return (
            tmpContent
        );
    }

    return (
        <div className={classNames} >
            <InnerBlocks.Content />
        </div>
    );
}