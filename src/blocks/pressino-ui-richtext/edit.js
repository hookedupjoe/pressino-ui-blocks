/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { istr, PressinoUI } from '../../pressino-ui';
import display from './display';
import { RichText } from '@wordpress/block-editor';


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpDisplay = display({ attributes, editMode: true });
    const blockProps = useBlockProps();
 
    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={istr('General Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'color', "Color", 'colors')}
                </PanelBody>
            </InspectorControls>

            <RichText
                tagName="h2"
                className={'ui header large ' + attributes.color || ''}
                identifier="text"
                value={attributes.text}
                onChange={(text) => setAttributes({ text })}
            />
        </div>



    );

}
