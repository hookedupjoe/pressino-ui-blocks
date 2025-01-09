<?php
/**
 * Plugin Name:       Pressino UI Blocks
 * Description:       Semantic UI styled block controls
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           2.0.10
 * Author:            W Joseph Francis
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pressino-ui-blocks
 *
 * @package Pressino
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; 
}
define( 'PRESSINO_UI_BLOCKS_CORE_VERSION', '2.0.10' );

define( 'PRESSINO_UI_BLOCKS_FILE', __FILE__ );

if ( !defined( 'PRESSINO_UI_BLOCKS_DIR' ) ) {
	define( 'PRESSINO_UI_BLOCKS_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
}

if ( !defined( 'PRESSINO_UI_BLOCKS_URL' ) ) {
	define( 'PRESSINO_UI_BLOCKS_URL', plugins_url( 'pressino-ui-blocks' ) );
}

if ( !defined( 'ACTAPP_CORE_URL' ) ) {
	define( 'ACTAPP_CORE_URL', plugins_url( 'pressino-ui-blocks' ) );
}

if ( !defined( 'PRESSINO_UI_BLOCKS_IMAGE_PATH' ) ) {
	define( 'PRESSINO_UI_BLOCKS_IMAGE_PATH', PRESSINO_UI_BLOCKS_URL.'/images/' );
}


if ( !defined( 'PRESSINO_UI_BLOCKS_BASE_DIR' ) ) {
	define( 'PRESSINO_UI_BLOCKS_BASE_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
}

if ( !defined( 'PRESSINO_UI_BLOCKS_BASE_URL' ) ) {
	define( 'PRESSINO_UI_BLOCKS_BASE_URL', plugins_url( 'pressino-ui-blocks' ) );
}

if ( !defined( 'PRESSINO_UI_BLOCKS_CORE_LIB_URL' ) ) {
	define( 'PRESSINO_UI_BLOCKS_CORE_LIB_URL', PRESSINO_UI_BLOCKS_BASE_URL . '/core' );
}

if ( !defined( 'PRESSINO_UI_BLOCKS_CORE_LIB' ) ) {
	define( 'PRESSINO_UI_BLOCKS_CORE_LIB', PRESSINO_UI_BLOCKS_BASE_DIR . '/core' );
}

require_once PRESSINO_UI_BLOCKS_BASE_DIR . '/cls/PressinoUIBlocks.php';

function create_block_pressino_ui_blocks_block_init() {

	//--- Register Standard UI Blocks
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-split' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-split-column' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-grid' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-grid-column' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-cards' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-card-section' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-card' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-tabs' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-tab' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-segment' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-message' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-header' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-image' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-button' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-bullets' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-container' );
	register_block_type( __DIR__ . '/build/blocks/pressino-ui-web-elem' );
}

add_action( 'init', 'create_block_pressino_ui_blocks_block_init' );
//require_once PRESSINO_UI_BLOCKS_BASE_DIR . '/cls/PressinoInsertDesignElem.php';
require_once PRESSINO_UI_BLOCKS_BASE_DIR . '/cls/PressinoInsertWebElem.php';



function pressino_ui_blocks_frontend_assets() {

	wp_enqueue_style(
		'pressino-ui-blocks-frontend-style',
		PRESSINO_UI_BLOCKS_BASE_URL . '/assets/frontend.css',
		[],
		'0.1.0'
	);
}
add_action( 'wp_enqueue_scripts', 'pressino_ui_blocks_frontend_assets' );



function pressino_ui_blocks_editor_assets() {
	wp_enqueue_script(
		'pressino-ui-blocks-editor-script',
		PRESSINO_UI_BLOCKS_BASE_URL . '/build/index.js',
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ],
		'0.1.0'
	);

	wp_enqueue_style(
		'pressino-ui-blocks-editor-style',
		PRESSINO_UI_BLOCKS_BASE_URL . '/assets/editor.css',
		[],
		'0.1.0'
	);
}
add_action( 'enqueue_block_editor_assets', 'pressino_ui_blocks_editor_assets' );
