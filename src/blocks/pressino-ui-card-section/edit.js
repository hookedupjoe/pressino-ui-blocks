/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import display from './display';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { plusCircle as blockIcon } from '@wordpress/icons';
import { Toolbar } from '@wordpress/components';


const onAddButtonBlock = () => {
    PressinoUI.addBlock({ blockName: 'bottomattachedbutton' })
}

const onAddMessageBlock = () => {
    PressinoUI.addBlock({ blockName: 'bottomattachedmessage' })
}


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {

    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();

    var tmpContent = [];
    tmpContent.push(tmpDisplay);

    let tmpEditToolbar = (!attributes.extra || !theProps.isSelected) ? '' : <Toolbar label="Options">
        <ToolbarGroup>
            <ToolbarButton
                icon={blockIcon}
                label="Add Bottom Button"
                text="Add Bottom Button"
                onClick={onAddButtonBlock}
            />
            <ToolbarButton
                icon={blockIcon}
                label="Add Bottom Message"
                text="Add Bottom Message"
                onClick={onAddMessageBlock}
            />
        </ToolbarGroup>
    </Toolbar>;

    var tmpEditorClass = '';
    tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'editorbox');
    if (theProps.isSelected) {
        tmpEditorClass = PressinoUI.util.addClasses(tmpEditorClass, 'selected');
    }

    tmpContent = el('div', { className: tmpEditorClass }, tmpContent);

    return <>
        <div {...blockProps}>
            {tmpEditToolbar}
            <InspectorControls>
                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'padding', "Padding", 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'margin', "Margin", 'margin')}
                    {PressinoUI.getStandardProperty(theProps, 'flexgrowbox', 'Fill column with first item?', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                    </PanelBody>
            </InspectorControls>
            {tmpContent}
        </div>
    </>

}
