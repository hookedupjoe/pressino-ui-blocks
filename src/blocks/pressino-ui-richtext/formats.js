import { PressinoUI, istr } from "../../pressino-ui";

const { __ } = wp.i18n;
import { RichTextToolbarButton,RichTextShortcut } from '@wordpress/block-editor';
import { unregisterFormatType, registerFormatType, toggleFormat } from '@wordpress/rich-text';
import formats from '../../format-library/default-formats';

/**
 * Block Classes
 */


//--- Template for updating classes
const borderLayoutFormat = {
	name: 'actappformat/inline-label',
	title: 'Bordered label',
	tagName: 'span',
	text: 'HL',
	className: 'actapp-border-label',
	edit: (props) => {
		const {isActive,onChange,value} = props;
		
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: 'actappformat/inline-label',
					attributes: {
						class: 'ui label blue large'
					}
				} ) 
			);
		};
	
		return <div>
			<RichTextShortcut
				type="primary"
				character="l"
				onUse={ onToggle }
			/>
			
			<RichTextToolbarButton
				icon={PressinoUI.getControlImage()}
				title={istr("UI Bordered Label")}
				isActive={isActive}
				onClick={onToggle}
				shortcutType="primary"
				shortcutCharacter="l"
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
		const {isActive,onChange,value} = props;
		
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
				isActive={isActive}
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
    'core/keyboard',
    'core/image',
    'core/code'
	].forEach( ( name ) => {
        
        unregisterFormatType( name )
       
    } );


	formats.forEach( ( { name, ...settings } ) => {
		console.log('reg');
		registerFormatType( name, settings )
	});



//------- Register New Formats
	[
		underlineFormat, 
	].forEach( ( { name, ...settings } ) => {
        
        registerFormatType( name, settings )
       
    } );



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

