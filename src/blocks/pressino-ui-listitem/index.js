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
PressinoUI.addAttributes('text', tmpAttributes, ['parenticonname','parenticontype','parentbullettype','parentbulletcolor','parentbulletsize','parentbulletalign','parentlistsize', 'header','description']);

/**
 * Register Block
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save,
	parent: "pressino/list",
	attributes: tmpAttributes,
	icon: PressinoUI.getBlockIcon(metadata.name),
} );
