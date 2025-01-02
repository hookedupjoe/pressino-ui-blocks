/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';
import { InnerBlocks } from '@wordpress/block-editor';

var classSpecs = {
    boolean: [],
	string: ['classes']
}

function getClass(theAtts, theIsEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('flo-wrap', classSpecs, theAtts, theIsEditMode);
    return tmpClasses
}

export default function display({ attributes, editMode }) {
    const { ratio, ismain, locationtb, locationlr } = attributes;

    let classNames = getClass(attributes,editMode);
    classNames += ' flo-10-' + ratio;
    const tmpRatioPerc = (ratio*10) + '%';
    if( ismain ){
        classNames += ' flo-main';
    } else {
        let tmpSideClass = locationtb == 'top' ? 'n' : 's';
        tmpSideClass += locationlr == 'left' ? 'w' : 'e';
        classNames += ' flo-side-' + tmpSideClass;
    }

    if(editMode === true){
        var tmpContent = [];
        var tmpName = attributes.ismain ? 'Main Panel' : 'Side Panel';
        var tmpPrefix = el('div',{className: 'ui label grey right pointing'}, 'Split Column');
        var tmpNameLabel = el('div',{className: 'ui label grey basic  padr10'}, tmpName);
        var tmpPercLabel = el('div',{className: 'ui label blue basic marr10 toright'}, tmpRatioPerc);
        
        //var tmpHM = tmpTabLabel;
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