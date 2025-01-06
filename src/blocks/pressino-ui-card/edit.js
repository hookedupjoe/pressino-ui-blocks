/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import { BlockControls } from '@wordpress/block-editor';
const { store: blockEditorStore } = wp.blockEditor;
const { useSelect } = wp.data;

import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var tmpDisplayObject = display({ props, attributes, editMode: true });
    const blockProps = useBlockProps();
    const { parentColor, parentMaxImgHeight, parentHeaderType} = attributes;

    var tmpParentBlock = PressinoUI.getParentBlock(props.clientId);
    if( tmpParentBlock ){
        var tmpParentAttributes =  tmpParentBlock.attributes;
        var tmpNeedToUpdate = false;
        var tmpAttsToSet = {};

        if( parentColor != tmpParentAttributes.color ){   
            tmpAttsToSet.parentColor = tmpParentAttributes.color;
            tmpNeedToUpdate = true;
        }
        if( parentMaxImgHeight != tmpParentAttributes.imageheight ){   
            tmpAttsToSet.parentMaxImgHeight = tmpParentAttributes.imageheight;
            tmpNeedToUpdate = true;
        }
        if( parentHeaderType != tmpParentAttributes.headertype ){   
            tmpAttsToSet.parentHeaderType = tmpParentAttributes.headertype;
            tmpNeedToUpdate = true;
        }
       
        if( tmpNeedToUpdate ){
            setAttributes(tmpAttsToSet);
            PressinoUI.refreshBlockEditor();
        }

    
    }

    const onAddBlock = () => {
        PressinoUI.addBlock({ blockName: 'pressino/cardsection', blockOptions: {
            extra: true,
            padding: 'pad0'
        } })
    }


    const { clientId } = props;
    const tmpChildren = useSelect(
        (select) => select(blockEditorStore).getBlock(clientId).innerBlocks,
    );

    var tmpHasMaxBlocks = false;
    if (tmpChildren.length > 1) {
        tmpHasMaxBlocks = true;
    }

    var tmpToolbarMods = '';

    if (!tmpHasMaxBlocks) {
        tmpToolbarMods = <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon={PressinoUI.getBlockIcon('pressino/cardsection')}
                    label="Add Bottom Section"
                    text="Add Bottom Section"
                    onClick={onAddBlock}
                />
            </ToolbarGroup>
        </BlockControls>
    }

    let tmpSidebarControls = <InspectorControls>
        {tmpToolbarMods}

        <PanelBody title={istr('General Settings')}>
            {PressinoUI.getStandardProperty(props, 'title', 'Card Title', 'text')}
            {PressinoUI.getStandardProperty(props, 'subtitle', 'Sub Title', 'text')}
            {PressinoUI.getStandardProperty(props, 'color', 'Card Color', 'colors')}
            {PressinoUI.getStandardProperty(props, { mediaID: 'mediaID', mediaURL: 'mediaURL' }, 'Card Image', 'image')}
            {PressinoUI.getStandardProperty(props, 'url', 'Target Content or Link', 'url')}
            {PressinoUI.getStandardProperty(props, 'urlopentab', 'Open link in new tab?', 'checkbox')}
            {PressinoUI.getStandardProperty(props, 'title', 'fluid', 'Full width', 'checkbox')}
            {PressinoUI.getStandardProperty(props, 'raised', 'Raised', 'checkbox')}
            {PressinoUI.getStandardProperty(props, 'headerColor', 'Header Color', 'colors')}

        </PanelBody>

    </InspectorControls>

    var tmpEditorClass = '';
    tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if (props.isSelected) {
        tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    var tmpRetEl = el(
        'div',
        { className: tmpEditorClass },
        [
            tmpSidebarControls,
            tmpDisplayObject
        ]
    );

    return <div {...blockProps}>
        {tmpRetEl}
    </div>

}
