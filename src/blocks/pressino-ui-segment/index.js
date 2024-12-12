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

/**
 * Setup Block Attributes
 */
let tmpAttributes = {};
PressinoUI.addAttributes('boolean', tmpAttributes, ['raised', 'stacked', 'vertical', 'clearing', 'inverted']);
PressinoUI.addAttributes('text', tmpAttributes, ['color', 'size', 'attached', 'alignment', 'basic', 'padding', 'classes']);

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
	icon: PressinoUI.getBlockIcon('default'),
} );
