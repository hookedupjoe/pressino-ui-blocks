/**
 * In-Edit UI
 */
import { __ } from '@wordpress/i18n';
import { __experimentalLinkControlSearchInput as LinkControlSearchInput, URLInput, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { istr, PressinoUI, el } from '../../pressino-ui';
import display from './display';
import ServerSideRender from '@wordpress/server-side-render';

import { useState } from '@wordpress/element';

let refreshedBlock = false;

/**
 * @return {Element} Element to render.
 */
export default function Edit(theProps) {
    const { attributes, setAttributes } = theProps;
    

    var tmpDisplay = ''; //display({ attributes, editMode: true });
   
    //--- Trigger resize to assure all the dynamic content is refreshed
    window.dispatchEvent(new Event('resize'));
    
    function refreshIfNeeded(){
        if( refreshedBlock ){
            return;
        }
        refreshedBlock = true;
        ThisApp.delay(1000).then(function(){
            ActAppBlocksController.loadFromMarkup();
        })
    }

    refreshIfNeeded()


    tmpDisplay = theProps.attributes.postid > 0 ? (
        
                    <><div className='ui segment pad3'><ServerSideRender
                    block="pressino/design-elem"
                    key="pressino/design-elem"
                    attributes={ theProps.attributes }
                /></div></>
                ) : (
                    <h2 key="pressino/design-elem">
                        { istr( 'Choose a design element to insert.' ) }
                    </h2>
                )

    const blockProps = useBlockProps();
    const { url, postid } = attributes;
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

    
    const clearSelection = () => {
        setAttributes({ postid: 0, title: '', url: '' });
    }

    const onSuggestionSelected = (suggestion) => {
        setAttributes({ title: suggestion.title, postid: suggestion.id });
        refreshedBlock = false;
    }

    function postSelection({attributes, setAttributes}){

        var tmpRet = [];

        var tmpEl = <LinkControlSearchInput
            hideLabelFromVision= {true}
            placeholder="Search here..."
            renderSuggestions={(props) => suggestionsRender(props)}
            suggestionsQuery={{
                type: 'post',
                subtype: 'actappelem',
            }}
            allowDirectEntry={false}
            withURLSuggestion={false}
            value={attributes.url}
            onChange={(newURL) => setAttributes({ url: newURL })}
            withCreateSuggestion={false}
        />;

        tmpRet.push(<div className="ui header small blue top attached mart0">{'Design Element'}</div>)
        //--- Show selection if none selected
        if( !(attributes.postid) ){
            tmpRet.push(tmpEl);
        } else {
            tmpRet.push(
                <>
                    <div className="ui message middle attached">{attributes.title || 'No Title'}</div>
                    <div
                        className='ui button bottom attached basic'
                        onClick={ clearSelection }
                    >
                    Clear
                    </div>
                </>
            )
        }
        
        return tmpRet;
        
    }

    const suggestionsRender = (props) => (

        <div className="components-dropdown-menu__menu" style={{ height: '300px', overflow: 'auto' }}>
            <div className="ui message ">
                <div class="ui header small blue">Select Design Element</div>
                {props.suggestions.map((suggestion, index) => {
                    return (
                        <div onClick={() => { onSuggestionSelected(suggestion); props.handleSuggestionClick(suggestion); }} className="ui button fluid blue basic compact marb3">{suggestion.title}</div>
                    )
                })
                }
            </div>
        </div>
    )

    return <>
        <div {...blockProps}>
            <InspectorControls>

                <PanelBody title={istr('General Settings')}>

                    {postSelection(theProps)}

                    {/* {PressinoUI.getStandardProperty(theProps, 'url', 'Target Content or Link', 'url')} */}
                </PanelBody>


            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
