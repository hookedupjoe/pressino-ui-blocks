/**
 * Pressino UI Tabs
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
PressinoUI.addAttributes('number', tmpAttributes, ['mincolwidth','imageheight']);
PressinoUI.addAttributes('text', tmpAttributes, ['columns','gridspacing']);
PressinoUI.addAttributes('boolean', tmpAttributes, ['centered']);

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
