import { PressinoUI } from "../../pressino-ui";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { unregisterFormatType, registerFormatType } = wp.richText;

/**
 * Block constants
 */


const header = {
	name: 'pressino/rt-header',
	title: __( 'Header' ),
	tagName: 'h1',
	className: 'pressino-rt-header',
	attributes: {
		class: 'class',
	},
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: 'pressino/rt-header',
					attributes: {
						class: 'ui header',
					},
				} ) 
			);
		};
		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="h"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon={PressinoUI.getBlockIcon('pressino/header')}
					title={ __( 'Header' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="h"
				/>
			</Fragment>
		);

	},
};


const underline = {
	name: 'pressino/rt-underline',
	title: __( 'Underline' ),
	tagName: 'span',
	className: 'pressino-rt-underlined',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange } ) {
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
		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="u"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon="editor-underline"
					title={ __( 'Underline' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="u"
				/>
			</Fragment>
		);

	},
};

export default function registerFormats () {
//--- Note:  header - excluded from production until fully featured / if used at all

//------- Register New Formats
	[
		underline, 
	].forEach( ( { name, ...settings } ) => {
        
        registerFormatType( name, settings )
       
    } );

//------- Unregister New Formats
    ['core/subscript',
    'core/superscript',
    'core/language',
    'core/strikethrough',
    'core/keyboard',
    'core/code'
	].forEach( ( name ) => {
        
        unregisterFormatType( name )
       
    } );

};



//------------------
// Old JavaScript Method
//------------------

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
    //                 (props.selectedBlock.name === 'core/paragraph' || props.selectedBlock.name === 'actappui/richtext')
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

