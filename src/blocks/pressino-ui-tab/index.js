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

PressinoUI.addAttributes('boolean', tmpAttributes, ['useicon','ismain', 'parent_inverted','parent_panels_inverted', 'parent_labelpaddingwide']);
PressinoUI.addAttributes('number', tmpAttributes, []);
PressinoUI.addAttributes('text', tmpAttributes, ['itemname', 'groupname', 'tablabel','showstatus','iconname','icontype', 'parent_color', 'parent_insidepadding', 'parent_menuiconpos']);

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
