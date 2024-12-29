/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI, LinkFormat } from '../../pressino-ui';
import display from './display';

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();

    return <>
        <InspectorControls>
            {LinkFormat.getSettings(props,{color:false})}
            <PanelBody title={istr('Advanced Options')}>
                {PressinoUI.getStandardProperty(props, 'classes', "Additional CSS Class(es)", 'text')}
            </PanelBody>

        </InspectorControls>
        <div {...blockProps}>
            {tmpDisplay}
        </div>
    </>

}
