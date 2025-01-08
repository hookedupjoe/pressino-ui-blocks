//import './filters/button-size';
import './filters/uitabs-catch-duplicates';

import formats from './format-library/default-formats';
import {
	unregisterFormatType, 
	registerFormatType, 
} from '@wordpress/rich-text';

export default function registerFormats () {

[
	'core/subscript',
	'core/superscript',
	'core/language',
	'core/footnote',
	'core/strikethrough',
	'core/underline', 
	'core/image',
].forEach( ( name ) => {
	unregisterFormatType( name )
} );



formats.forEach( ( { name, ...settings } ) => {
	registerFormatType( name, settings )
});



};

window.addEventListener('DOMContentLoaded',function () {
	registerFormats();
});

