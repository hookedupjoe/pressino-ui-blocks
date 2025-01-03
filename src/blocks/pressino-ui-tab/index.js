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

PressinoUI.addAttributes('boolean', tmpAttributes, ['useicon']);
PressinoUI.addAttributes('number', tmpAttributes, ['tabpos']);
PressinoUI.addAttributes('text', tmpAttributes, ['itemname', 'groupname', 'tablabel','showstatus','iconname','icontype']);

/**
 * Register Block
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save,
	parent: "pressino/tabs",
	attributes: tmpAttributes,
	icon: PressinoUI.getBlockIcon(metadata.name),
} );
