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
PressinoUI.addAttributes('number', tmpAttributes, ['mediaID','parent_imageheight']);
PressinoUI.addAttributes('boolean', tmpAttributes, ['fluid', 'raised', 'urlopentab', 'includeBottom']);
PressinoUI.addAttributes('text', tmpAttributes, ['parent_color', 'parent_headertype', 'text', 'title', 'text', 'subtitle', 'color', 'headerColor', 'url', 'mediaURL']);

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
