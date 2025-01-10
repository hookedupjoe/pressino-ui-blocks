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

PressinoUI.addAttributes('number', tmpAttributes, ['mediaID']);
PressinoUI.addAttributes('text', tmpAttributes, ['parent_size','parent_useimage','mediaURL']);

/**
 * Register Block
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save,
	parent: "pressino/grid",
	attributes: tmpAttributes,
	icon: PressinoUI.getBlockIcon(metadata.name),
} );
