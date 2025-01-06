/**
 * Pressino UI Tab
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import {PressinoUI} from '../../pressino-ui';

/**
 * Setup Block Attributes
 */
let tmpAttributes = {};
PressinoUI.addAttributes('number', tmpAttributes, ['mediaID','parentMaxImgHeight']);
PressinoUI.addAttributes('boolean', tmpAttributes, ['fluid', 'raised', 'urlopentab', 'includeBottom']);
PressinoUI.addAttributes('text', tmpAttributes, ['text', 'title', 'text', 'subtitle', 'color', 'headerColor', 'parentColor', 'parentHeaderType', 'url', 'mediaURL', 'parent-color']);

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
