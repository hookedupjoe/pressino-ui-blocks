import { PressinoUI, istr } from "../../pressino-ui";

const { __ } = wp.i18n;
import { RichTextToolbarButton,RichTextShortcut } from '@wordpress/block-editor';
import { useState, useLayoutEffect, useEffect } from '@wordpress/element';

import formats from '../../format-library/default-formats';
import {
	getTextContent,
	applyFormat,
	removeFormat,
	slice,
	isCollapsed,
	insert,
	insertObject,
	create,
	unregisterFormatType, 
	registerFormatType, 
	toggleFormat
} from '@wordpress/rich-text';


/**
 * Block Classes
 */


//--- Template for updating classes
// const borderLayoutFormat = {
// 	name: 'actappformat/inline-label',
// 	title: 'Bordered label',
// 	tagName: 'span',
// 	text: 'HL',
// 	className: 'actapp-border-label',
// 	edit: (props) => {
// 		const {isActive,onChange,value} = props;
		
// 		const onToggle = () => {
// 			onChange(
// 				toggleFormat( value, {
// 					type: 'actappformat/inline-label',
// 					attributes: {
// 						class: 'ui label blue large'
// 					}
// 				} ) 
// 			);
// 		};
	
// 		return <div>
// 			<RichTextShortcut
// 				type="primary"
// 				character="l"
// 				onUse={ onToggle }
// 			/>
			
// 			<RichTextToolbarButton
// 				icon={PressinoUI.getControlImage()}
// 				title={istr("UI Bordered Label")}
// 				isActive={isActive}
// 				onClick={onToggle}
// 				shortcutType="primary"
// 				shortcutCharacter="l"
// 			></RichTextToolbarButton>
// 		</div>
		
// 	},
// }


//--- Template for updating classes
const insertIconFormat = {
	name: 'pressino/inline-icon-format',
	title: 'Insert Icon',
	tagName: 'span',
	className: 'pressino-inline-icon',
	
	edit: (props) => {
		const {isObjectActive, isActive,onChange,value} = props;
		const [ addingLink, setAddingLink ] = useState( false );
		const [ openedBy, setOpenedBy ] = useState( null );


		useEffect( () => {
			// When the link becomes inactive (i.e. isActive is false), reset the editingLink state
			// and the creatingLink state. This means that if the Link UI is displayed and the link
			// becomes inactive (e.g. used arrow keys to move cursor outside of link bounds), the UI will close.
			console.log('isActive',isActive,'isObjectActive',isObjectActive);
			// if ( ! isActive ) {
			// 	setAddingLink( false );
			// }

		}, [ isActive, isObjectActive ] );

		const onToggle = () => {
			// const text = getTextContent( slice( value ) );
			// console.log('text',text);
			const plainText = ' ';
			const format = {
				type: 'pressino/inline-icon-format',
				attributes: {
					class: 'icon fa-solid fa-paperclip large blue'
				},
			};
			

			if ( isCollapsed( value ) ) {
				onChange(
					insert(
						value,
						applyFormat(
							create( { 
								text: plainText, 
						}),
							format,
							value.start,
							value.start + plainText.length
						)
					)
				)

			} else {
				alert('Do not select anything when inserting an icon', "Can Not Insert Icons", 'e');
				// onChange(
				// 	toggleFormat( value, {
				// 		type: 'pressino/inline-icon',
				// 		attributes: {
				// 			class: 'fa-hill-rockslide icon fa-solid'
				// 		}
				// 	} ) 
				// );
			}
			
		};
	
		return <div>
			<RichTextShortcut
				type="primary"
				character="q"
				onUse={ onToggle }
			/>
			
			<RichTextToolbarButton
				icon={PressinoUI.getControlImage()}
				title={istr("UI Icon")}
				isActive={isActive}
				onClick={onToggle}
				shortcutType="primary"
				shortcutCharacter="q"
			></RichTextToolbarButton>
		</div>
		
	},
}

//--- Template for updating styles
const underlineFormat = {
	name: 'pressino/rt-underline',
	title: 'Underline',
	tagName: 'span',
	text: 'HL',
	className: 'actapp-underline',
	edit: (props) => {
		const {isObjectActive, isActive,onChange,value} = props;
		
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: 'pressino/rt-underline',
					attributes: {
						style: 'text-decoration: underline;',
					},
				} ) 
			);
		};

		return <div>
			<RichTextShortcut
				type="primary"
				character="u"
				onUse={ onToggle }
			/>
			<RichTextToolbarButton
				icon="editor-underline"
				title="Underline"
				isActive={isObjectActive}
				onClick={onToggle}
				shortcutType="primary"
				shortcutCharacter="u"
			></RichTextToolbarButton>
		</div>
	},
}



export default function registerFormats () {
//--- Note:  header - excluded from production until fully featured / if used at all



//------- Unregister New Formats
['core/subscript',
    'core/superscript',
    'core/language',
    'core/strikethrough',
	'core/underline', //--- How to add this to the UI?
    // 'core/keyboard',
    'core/image',
    'core/code'
	].forEach( ( name ) => {
        
        unregisterFormatType( name )
       
    } );


	formats.forEach( ( { name, ...settings } ) => {
		registerFormatType( name, settings )
	});



//------- Register New Formats
	// [
	// 	underlineFormat, insertIconFormat,
	// ].forEach( ( { name, ...settings } ) => {
        
    //     registerFormatType( name, settings )
       
    // } );



};



//------------------
// Old JavaScript Method
//------------------

//--- This method works as well
	
    // var withSelect  = wp.data.withSelect;
    //     var ifCondition = wp.compose.ifCondition;
    //     var compose     = wp.compose.compose;
        
        
    //     var TextHighlightButton = function( props ) {
    //         return wp.element.createElement(
    //             wp.blockEditor.RichTextToolbarButton, 
    //             {
    //                 icon: PressinoUI.getControlImage(), 
    //                 title: 'Bordered label', 
    //                 isActive: props.isActive,
    //                 onClick: function() {
    //                     console.log('onclick',props);
                        
    //                     props.onChange( 
    //                         wp.richText.toggleFormat(props.value, {
    //                             type: 'actappformat/inline-label',
    //                             attributes: {
    //                                 class: 'ui label blue large'
    //                             }
    //                         })
                            
    //                     );
    //                     //console.log('props',props)
    //                 }
                    
    //             }
    //         );
    //     }
    
    //     var ConditionalTextHighlightButton = compose(
    //         withSelect( function( select ) {
    //             return {
    //                 selectedBlock: select( 'core/block-editor' ).getSelectedBlock()
    //             }
    //         } ),
    //         ifCondition( function( props ) {
    //             return (
    //                 props.selectedBlock &&
    //                 (props.selectedBlock.name === 'core/paragraph')
    //             );
    //         } )
    //     )( TextHighlightButton );


    //         wp.richText.registerFormatType(
    //             'actappformat/inline-label', {
    //                 title: 'Bordered label',
    //                 tagName: 'span',
    //                 text: 'HL',
    //                 className: 'actapp-border-label',
    //                 edit: ConditionalTextHighlightButton,
    //             }
    //         );

