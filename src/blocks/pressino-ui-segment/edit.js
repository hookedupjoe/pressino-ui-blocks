/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import './editor.scss';
import display from './display';
const THIS_NAMESPACE = 'pressino-ui-blocks';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { raised } = attributes;

    return <>
        <InspectorControls>
            <PanelBody title={__('Settings', THIS_NAMESPACE)}>
                <ToggleControl
                    checked={!!raised}
                    label={__(
                        'Raised',
                        THIS_NAMESPACE
                    )}
                    onChange={() =>
                        setAttributes({
                            raised: !raised,
                        })
                    }
                />
            </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
