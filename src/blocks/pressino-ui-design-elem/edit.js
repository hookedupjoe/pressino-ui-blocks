/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { __experimentalLinkControlSearchInput as LinkControlSearchInput, URLInput, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import display from './display';

import { useState } from '@wordpress/element';


/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;

    var tmpDisplay = display({ attributes, editMode: true });
    tmpDisplay = el('div',{},'Insert Design Element');

    const blockProps = useBlockProps();
    const { url, useicon } = attributes;
    const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
    const [isInserterOpen, setInserterOpen] = useState(false);

    var tmpOnChangeFunc = (theURL, thePost) => {
		var tmpToSet = {};
		tmpToSet[theAttName] = theURL;

		theProps.setAttributes(tmpToSet);
		if (tmpDoRefresh) {
			refreshBlockEditor();
		}
	}
    
    
    const suggestionsRender = (props) => (
       
        <div className="components-dropdown-menu__menu" style={{height: '300px',overflow:'auto'}}>
            <div className="ui message ">
            <div class="ui header small blue">Select Design Element</div>
            { props.suggestions.map( ( suggestion, index ) => {
                    return (
                        <div onClick={ () => {suggestion.url = suggestion.id; props.handleSuggestionClick( suggestion );console.log('suggestion',suggestion)} } className="ui button fluid blue basic compact marb3">{suggestion.title}</div>
                    )
                } )
            }
            </div>
        </div>
    )

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>
                    <LinkControlSearchInput
					placeholder="Search here..."
	renderSuggestions={ ( props ) => suggestionsRender(props) }
    suggestionsQuery={ {
		type: 'post',
		subtype: 'actappelem',
	} }
	allowDirectEntry={false}
	withURLSuggestion={false}
	value={ attributes.url }
	onChange={ ( newURL ) => setAttributes( { url: newURL } ) }
	withCreateSuggestion={false}
/>

                    {/* {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')} */}
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
