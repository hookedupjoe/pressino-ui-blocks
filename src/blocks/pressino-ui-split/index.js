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
PressinoUI.addAttributes('number', tmpAttributes, []);
PressinoUI.addAttributes('boolean', tmpAttributes, []);
PressinoUI.addAttributes('text', tmpAttributes, ['splitratio','gridspacing','gridgap', 'stackwhen']);

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
