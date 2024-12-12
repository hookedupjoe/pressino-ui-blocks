/**
 * Pressino UI Image
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
PressinoUI.addAttributes('boolean', tmpAttributes, ['fluid', 'avatar', 'rounded', 'circular', 'urlopentab', 'bordered', 'centered']);
PressinoUI.addAttributes('text', tmpAttributes, ['text', 'color', 'size', 'alignmentvertical', 'url', 'mediaURL', 'float','margin','padding', 'classes']);
PressinoUI.addAttributes('number', tmpAttributes, ['mediaID']);

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
