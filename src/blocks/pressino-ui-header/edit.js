/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, attNamesMedia } from '../../pressino-ui';
import display, { getExtraContent } from './display';
import { PressinoAlignmentControl } from '../../components/pressino-alignment-control'
import { getClass } from './display';
import ReactDOMServer from 'react-dom/server';

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    var tmpAtts = theProps.attributes;

    // var tmpDisplay = ''; //display({ attributes, editMode: true });
    const blockProps = useBlockProps();
    const { alignment, attached, block } = attributes;
    const checkboxList = ['', '', '', '', '', '', ''];
    const tmpExtra = getExtraContent(attributes);
    var tmpClassName = getClass(attributes, true);
    var tmpExtraClasses = tmpClassName;

    if (attributes.subtext != '' && attributes.dividing) {
        tmpClassName = tmpClassName.replace('dividing', '');
    }
    var tmpShowSub = !attached && !block && attributes.subtext != '';

    let tmpSubText = tmpShowSub ? <div className={'ui header  mar0  pad0 marb15 ' + attributes?.color + tmpExtraClasses}><div class="ui sub header">{attributes.subtext}</div></div> : <div class="marb15"></div>;

    let tmpDisplay = [<RichText
        tagName="h2"
        placeholder='Enter you header here'
        className={tmpClassName + ' mar0'}
        allowedFormats={ [ ] }
        identifier="content"
        value={attributes.text}
        onChange={(content) => setAttributes({ text: content })}
    />, tmpSubText]

    return <>
        <div {...blockProps}>
            <BlockControls group="block">
                <PressinoAlignmentControl
                    value={alignment?.replace(' aligned', '')}
                    onChange={(nextAlign) => {
                        let tmpToSet = nextAlign ? nextAlign + ' aligned' : '';
                        setAttributes({ alignment: tmpToSet });
                    }}
                />
            </BlockControls>

            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    {PressinoUI.getStandardProperty(theProps, 'text', 'Header Text', 'text')}
                    {(!block && !attached && PressinoUI.getStandardProperty(theProps, 'subtext', 'Sub Text', 'text'))}
                    {PressinoUI.getStandardProperty(theProps, 'color', 'Header Color', 'colors')}
                    {PressinoUI.getStandardProperty(theProps, 'size', 'Header size', 'sizes')}

                    {PressinoUI.getStandardProperty(theProps, 'inverted', 'Inverted', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'dividing', 'Line at bottom', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'block', 'Show as block', 'checkbox')}
                    {PressinoUI.getStandardProperty(theProps, 'attached', 'Attached', 'attached')}
                    {PressinoUI.getStandardProperty(theProps, 'alignment', 'Alignment', 'alignment')}



                </PanelBody>

                <PanelBody title={istr('Formatting Options')}>
                    {PressinoUI.getStandardProperty(theProps, 'margin', 'Margin', 'margin')}
                    {PressinoUI.getStandardProperty(theProps, 'padding', 'Padding', 'padding')}
                    {PressinoUI.getStandardProperty(theProps, 'bottommargin', 'Bottom Margin', 'bottommargin')}
                    {PressinoUI.getStandardProperty(theProps, 'classes', "Additional CSS Class(es)", 'text')}
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
