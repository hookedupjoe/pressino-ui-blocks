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
PressinoUI.addAttributes('text', tmpAttributes, ['iconname','icontype','bullettype','bulletcolor','bulletsize','bulletalign']);
PressinoUI.addAttributes('boolean', tmpAttributes, ['relaxed','animated','divided','celled']);
PressinoUI.addAttributes('number', tmpAttributes, []);

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
