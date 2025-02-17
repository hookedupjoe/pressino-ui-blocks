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
export default function Edit(props) {
    const { setAttributes } = props;
    var tmpDisplay = ''; 
   
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


    tmpDisplay = props.attributes.postid > 0 ? (
        <><div className='ui segment pad3'><ServerSideRender
            block="pressino/webpart"
            key="pressino/webpart"
            attributes={ props.attributes }
        /></div></>
        ) : (
            <div class="ui segment basic right aligned pad5"><div class="ui right pointing label orange large" key="pressino/webpart">
                { istr( 'Select a web part to insert in settings.' ) }
            </div></div>
    )

    const blockProps = useBlockProps();
    
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
                subtype: 'pressinowebpart',
            }}
            allowDirectEntry={false}
            withURLSuggestion={false}
            value={attributes.url}
            onChange={(newURL) => setAttributes({ url: newURL })}
            withCreateSuggestion={false}
        />;

        tmpRet.push(<div className="ui header small blue top attached mart0">{'Select a web part to insert'}</div>)
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
                <div class="ui header small blue">Select Web Part</div>
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
                    {postSelection(props)}
                </PanelBody>

            </InspectorControls>

            {tmpDisplay}
        </div>
    </>

}
