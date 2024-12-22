/**
 * Pressino UI Segment
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import {PressinoUI} from '../../pressino-ui';
import registerFormats from './formats';


window.addEventListener('DOMContentLoaded',function () {
	registerFormats();
});



/**
 * Setup Block Attributes
 */
let tmpAttributes = {};
PressinoUI.addAttributes('boolean', tmpAttributes, ['underlined']);
PressinoUI.addAttributes('text', tmpAttributes, ['color']);

tmpAttributes.content = {
	source: 'html',
	selector: 'h2'
}

/**
 * Register Block
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save,
	attributes: tmpAttributes,
	icon: PressinoUI.getBlockIcon(metadata.name),
} );
