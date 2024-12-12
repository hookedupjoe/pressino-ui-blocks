/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI} from '../../pressino-ui';
import './editor.scss';
import display from './display';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised, basic, classes } = attributes;

    return <>
        <InspectorControls>
            <PanelBody title={istr('General Settings')}>
            {PressinoUI.getStandardProperty(theProps,'basic','No Border', 'checkbox')}
            {!basic && (PressinoUI.getStandardProperty(theProps,'raised','Raised', 'checkbox'))}
            </PanelBody>
            <PanelBody title={istr('Formatting Options')}>
                {PressinoUI.getStandardProperty(theProps,'classes', "Additional CSS Class(es)", 'text')}
            {/* <TextControl
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label={ istr('Additional Classes') }
                value={ classes || '' }
                onChange={ ( value ) =>
                    setAttributes( { classes: value } )
                }
            /> */}
         
            </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
