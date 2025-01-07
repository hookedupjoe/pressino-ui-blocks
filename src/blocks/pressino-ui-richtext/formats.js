import formats from '../../format-library/default-formats';
import {
	unregisterFormatType, 
	registerFormatType, 
} from '@wordpress/rich-text';

export default function registerFormats () {

//------- Unregister New Formats
['core/subscript',
    'core/superscript',
    'core/language',
    'core/strikethrough',
	'core/underline', //--- How to add this to the UI?
    // 'core/keyboard',
    'core/image',
    //'core/code'
	].forEach( ( name ) => {
        unregisterFormatType( name )
    } );


	formats.forEach( ( { name, ...settings } ) => {
		registerFormatType( name, settings )
	});



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

