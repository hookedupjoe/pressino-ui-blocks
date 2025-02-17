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
import {PressinoUI, LinkFormat, VisibilityOptions} from '../../pressino-ui';

/**
 * Setup Block Attributes
 */
let tmpAttributes = {};
PressinoUI.addAttributes('boolean', tmpAttributes, ['raised', 'stacked', 'vertical', 'inverted']);
PressinoUI.addAttributes('text', tmpAttributes, ['color', 'size', 'attached', 'alignment', 'basic', 'padding', 'classes', 'bordertype', 'borderwidth']);

LinkFormat.addAttributes(tmpAttributes);
VisibilityOptions.addAttributes(tmpAttributes);

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
