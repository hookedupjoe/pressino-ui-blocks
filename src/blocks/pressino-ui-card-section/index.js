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
PressinoUI.addAttributes('boolean', tmpAttributes, ['extra']);
PressinoUI.addAttributes('text', tmpAttributes, ['padding','margin','classes']);

/**
 * Register Block
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save,
	parent: 'pressino/card',
	attributes: tmpAttributes,
	icon: PressinoUI.getBlockIcon('default'),
} );
