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
PressinoUI.addAttributes('boolean', tmpAttributes,['fluid','compact','basic','circular','urlopentab','useicon','iconalign', 'iconaslabel','largeicon']);
PressinoUI.addAttributes('text', tmpAttributes,['text','color','size', 'attached', 'url', 'float', 'classes','margin','padding','bottommargin','iconname','icontype','iconcolor']);

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
