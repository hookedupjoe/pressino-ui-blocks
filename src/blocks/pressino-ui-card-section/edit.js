/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    //const {  } = attributes;

    return <>
        <InspectorControls>

            <PanelBody title={istr('Formatting Options')}>
                {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
            </PanelBody>

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
