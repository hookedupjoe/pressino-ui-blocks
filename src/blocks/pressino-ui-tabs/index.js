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
PressinoUI.addAttributes('boolean', tmpAttributes, ['inverted','panelsinverted']);
PressinoUI.addAttributes('text', tmpAttributes, ['outsidepadding','insidepadding', 'firsttabid', 'groupname','tabsinfo','labelpadding','bodyonly','color','classes']);

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
