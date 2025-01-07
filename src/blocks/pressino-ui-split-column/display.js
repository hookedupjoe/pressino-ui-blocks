/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
import { InnerBlocks } from '@wordpress/block-editor';

var classSpecs = {
    boolean: [],
	string: ['classes']
}

function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('', classSpecs, attributes, isEditMode);
    return tmpClasses
}

export default function display({ attributes, editMode }) {
    const { ismain, locationtb, locationlr, parent_stackwhen, parent_splitratio } = attributes;
    
    var tmpRatio = parent_splitratio || '10';
    tmpRatio = parseInt(tmpRatio);
    if( tmpRatio == 0 ){
        tmpRatio = 10;
    }
    const ratio = ismain ? tmpRatio : 20 - tmpRatio;

    let tmpSize = parent_stackwhen || '';

    let classNames = getClass(attributes,editMode);
    classNames += ' flo' + tmpSize + '-flex-' + ratio;
    const tmpRatioPerc = (ratio*5) + '%';
    if( ismain ){
        classNames += ' flo' + tmpSize + '-main';
    } else {
        let tmpSideClass = locationtb == 'top' ? 'n' : 's';
        tmpSideClass += locationlr == 'left' ? 'w' : 'e';
        classNames += ' flo' + tmpSize + '-side-' + tmpSideClass;
    }

    if(editMode === true){
        var tmpContent = [];
        var tmpName = attributes.ismain ? 'Main Panel' : 'Side Panel';
        var tmpPrefix = el('div',{className: 'ui label grey right pointing'}, 'Split Column');
        var tmpNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpName);
        var tmpPercLabel = el('div',{className: 'ui label blue basic marr10 toright'}, tmpRatioPerc);

        var tmpEditHeader = el('div', {className:"ui message pad8 grey small"}, tmpPrefix, tmpNameLabel, tmpPercLabel);
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