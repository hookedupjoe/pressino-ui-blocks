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
PressinoUI.addAttributes('text', tmpAttributes,['name', 'ctl', 'text', 'color', 'size', 'subtext', 'attached', 'alignment', 'margin', 'bottommargin', 'padding', 'classes','iconname','icontype','iconsize','iconcolor']);
PressinoUI.addAttributes('boolean', tmpAttributes,['dividing', 'block', 'inverted','useicon','iconontop']);

tmpAttributes.content = {
	source: 'html',
	selector: 'h2'
}

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
