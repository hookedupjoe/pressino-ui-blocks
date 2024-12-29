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
import {PressinoUI, LinkFormat} from '../../pressino-ui';

/**
 * Setup Block Attributes
 */
let tmpAttributes = {};
PressinoUI.addAttributes('number', tmpAttributes, []);
PressinoUI.addAttributes('boolean', tmpAttributes, ['flat']);
PressinoUI.addAttributes('text', tmpAttributes, ['iconname', 'icontype', 'iconcolor', 'iconsize', 'classes', 'bullettype','bulletcolor','bulletsize','bulletspacing','textsize']);
LinkFormat.addAttributes(tmpAttributes);

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
