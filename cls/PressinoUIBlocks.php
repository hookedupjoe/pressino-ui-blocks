<?php
/**
 * Primary Class for Pressino Blocks Functionality: PressinoUIBlocks
 * 
 * Copyright (c) 2024-2025 Joseph Francis / hookedup, inc. 
 *
 * This code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This header and all notices must be kept intact.
 *
 * @author Joseph Francis
 * @package actionappwp
 * @since actionappwp 1.0.0
 */


class PressinoUIBlocks {
	private static $instance;
	
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new PressinoUIBlocks();
		}
		return self::$instance;
	}
	
	public static function getBlockIcon( $theName = '' ){
		$defaultIconPath = 'M 2.7947192,23.2569 C 1.9723743,22.975353 1.3765431,22.511197 0.92920694,21.803663 0.62881455,21.328544 0.62592867,21.235758 0.62592867,12.050123 c 0,-8.8410006 0.0128219,-9.2982582 0.27421251,-9.7965642 C 1.243921,1.5982422 2.0450475,0.93633387 2.8006461,0.68331842 3.3408908,0.50241578 3.9708197,0.48912818 12.006948,0.48912818 c 8.036128,0 8.666058,0.0132921 9.2063,0.19419024 0.755599,0.25301545 1.556724,0.91492378 1.900505,1.57024038 0.261416,0.498306 0.274214,0.9555636 0.274214,9.7965642 0,9.185635 -0.0028,9.278421 -0.303278,9.75354 -0.447334,0.707534 -1.043167,1.17169 -1.865515,1.453237 l -0.730831,0.250219 H 12.006948 3.5255523 Z m 5.0699091,-2.7933 c 0.1918926,-0.141069 0.227839,-0.502758 0.227839,-2.291818 0,-1.168367 0.04106,-2.124306 0.091202,-2.124306 0.050168,0 0.5557761,0.125927 1.1236023,0.27983 1.3623004,0.369246 3.4821674,0.458845 4.9319624,0.208454 3.52538,-0.608862 5.600702,-2.783309 5.594568,-5.86179 C 19.831258,9.3532967 19.559271,8.465286 18.856419,7.4818781 17.379605,5.4155972 14.527742,4.4304452 10.416723,4.5664644 8.166978,4.6408995 5.3386742,5.0046605 5.0840954,5.2523159 4.9431409,5.3894395 4.9028672,7.0804513 4.9028672,12.862351 c 0,6.615817 0.025058,7.452167 0.2278288,7.601249 0.1684549,0.123848 0.5246944,0.167506 1.3669636,0.167506 0.842271,0 1.1985112,-0.04366 1.3669636,-0.167506 z m 2.7961777,-5.693555 c -0.381557,-0.05045 -1.1155213,-0.236832 -1.6310366,-0.4142 L 8.0924597,14.033349 V 10.34684 c 0,-3.4107166 0.01908,-3.6922419 0.2537113,-3.7631122 0.1395375,-0.042132 1.2649594,-0.076602 2.500923,-0.076602 2.055853,0 2.304443,0.020941 2.919357,0.245874 1.078564,0.3945404 1.811687,0.9274646 2.319784,1.6862985 0.418695,0.6253189 0.473697,0.8179467 0.532338,1.8644027 0.07871,1.404807 -0.129717,2.233434 -0.754288,2.99835 -0.514905,0.630619 -1.44237,1.194049 -2.229966,1.354687 -0.805377,0.164259 -2.189204,0.216996 -2.973519,0.113306 z';

		return $defaultIconPath; //'<path d="M 2.7947192,23.2569 C 1.9723743,22.975353 1.3765431,22.511197 0.92920694,21.803663 0.62881455,21.328544 0.62592867,21.235758 0.62592867,12.050123 c 0,-8.8410006 0.0128219,-9.2982582 0.27421251,-9.7965642 C 1.243921,1.5982422 2.0450475,0.93633387 2.8006461,0.68331842 3.3408908,0.50241578 3.9708197,0.48912818 12.006948,0.48912818 c 8.036128,0 8.666058,0.0132921 9.2063,0.19419024 0.755599,0.25301545 1.556724,0.91492378 1.900505,1.57024038 0.261416,0.498306 0.274214,0.9555636 0.274214,9.7965642 0,9.185635 -0.0028,9.278421 -0.303278,9.75354 -0.447334,0.707534 -1.043167,1.17169 -1.865515,1.453237 l -0.730831,0.250219 H 12.006948 3.5255523 Z m 5.0699091,-2.7933 c 0.1918926,-0.141069 0.227839,-0.502758 0.227839,-2.291818 0,-1.168367 0.04106,-2.124306 0.091202,-2.124306 0.050168,0 0.5557761,0.125927 1.1236023,0.27983 1.3623004,0.369246 3.4821674,0.458845 4.9319624,0.208454 3.52538,-0.608862 5.600702,-2.783309 5.594568,-5.86179 C 19.831258,9.3532967 19.559271,8.465286 18.856419,7.4818781 17.379605,5.4155972 14.527742,4.4304452 10.416723,4.5664644 8.166978,4.6408995 5.3386742,5.0046605 5.0840954,5.2523159 4.9431409,5.3894395 4.9028672,7.0804513 4.9028672,12.862351 c 0,6.615817 0.025058,7.452167 0.2278288,7.601249 0.1684549,0.123848 0.5246944,0.167506 1.3669636,0.167506 0.842271,0 1.1985112,-0.04366 1.3669636,-0.167506 z m 2.7961777,-5.693555 c -0.381557,-0.05045 -1.1155213,-0.236832 -1.6310366,-0.4142 L 8.0924597,14.033349 V 10.34684 c 0,-3.4107166 0.01908,-3.6922419 0.2537113,-3.7631122 0.1395375,-0.042132 1.2649594,-0.076602 2.500923,-0.076602 2.055853,0 2.304443,0.020941 2.919357,0.245874 1.078564,0.3945404 1.811687,0.9274646 2.319784,1.6862985 0.418695,0.6253189 0.473697,0.8179467 0.532338,1.8644027 0.07871,1.404807 -0.129717,2.233434 -0.754288,2.99835 -0.514905,0.630619 -1.44237,1.194049 -2.229966,1.354687 -0.805377,0.164259 -2.189204,0.216996 -2.973519,0.113306 z" />';
	}

	public static function actapp_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug' => 'pressino-ui-blocks',
					'title' => __( 'Pressino UI Blocks'),
				),
			),
			$categories
		);
	}

	
	// public static function loadStandardBlock($theName, $theFileName = '', $theDependencies = null){
	// 	$tmpDepDefaults = array('wp-blocks','wp-editor','wp-element');
	// 	//$tmpDeps = array_combine($tmpDepDefaults, $theDependencies);
	// 	$tmpFN = $theFileName;
	// 	if( $tmpFN == ''){
	// 		$tmpFN = $theName;
	// 	}
	// 	wp_enqueue_script(
	// 		$theName, 
	// 		PRESSINO_UI_BLOCKS_URL . '/blocks/' . $tmpFN . '.js',
	// 		$tmpDepDefaults,
	// 		true
	// 	);
	// 	wp_enqueue_style ( 'aa-core-blocks_css' );
	// }

	
	public static function actapp_init_blocks_content($theHook) {
		$tmpConfig = array(
			'baseURL'=> PRESSINO_UI_BLOCKS_URL,
			'catalogURL'=> PRESSINO_UI_BLOCKS_URL . '/catalog'
		);

		$tmpJson = json_encode($tmpConfig);
		$tmpScript = 'window.ActionAppCore.PressinoUIBlocksConfig = ' . $tmpJson;

		wp_add_inline_script( 'app-only-preinit', $tmpScript );
		//--- Add Blocks-Wide CSS
		
		wp_register_style( 'pressino-ui-core-css',   PRESSINO_UI_BLOCKS_URL . '/css/pressino-ui.css', false,  PRESSINO_UI_BLOCKS_CORE_VERSION );
		wp_enqueue_style ( 'pressino-ui-core-css' );

		//--- Load the action app core components and ActionAppCore.common.blocks add on
		wp_enqueue_script(
			'pressino-ui-core', 
			PRESSINO_UI_BLOCKS_URL . '/js/PressinoUICore.js',
			array(),
			true
		);
	}
	

	public static function actapp_init_blocks_css($theHook) {
		// $tmpConfig = array(
		// 	'baseURL'=> PRESSINO_UI_BLOCKS_URL,
		// 	'catalogURL'=> PRESSINO_UI_BLOCKS_URL . '/catalog'
		// );

        // $my_css_ver = '1';//Todo

		// wp_register_style( 'actapp-blocks-content_css',   PRESSINO_UI_BLOCKS_URL . '/css/wp-blocks-content.css', false,  $my_css_ver );
		// wp_enqueue_style ( 'actapp-blocks-content_css' );
	}


	public static function actapp_init_admin_scripts(){
	    // $my_css_ver = '1';//Todo
		// wp_register_style( 'aa-core-admin_css',   PRESSINO_UI_BLOCKS_URL . '/css/wp-admin.css', false,  $my_css_ver );
		// wp_enqueue_style ( 'aa-core-admin_css' );
	}
	

	public static function actapp_init_blocks($theHook) {
		
	    // $my_css_ver = '1';//Todo
	
		// wp_register_style( 'aa-core-blocks_css',   PRESSINO_UI_BLOCKS_URL . '/css/wp-blocks.css', false,  $my_css_ver );
		// //--- Load the action app core components and ActionAppCore.common.blocks add on
		// wp_enqueue_script(
		// 	'actapp-blocks-editor', 
		// 	PRESSINO_UI_BLOCKS_URL . '/js/BlockEditor.js',
		// 	array('wp-blocks','wp-editor','wp-element'),
		// 	true
		// );


		// //,'richtext'
		// //--- Load standardly created widgets;
		// $tmpWidgetList =  self::get_custom_widget_list();
		// //ToAdd _. , 'buttons'
		// foreach ($tmpWidgetList as $aName) {
		// 	self::loadStandardBlock($aName);
		// }
			
	}

	
	
	public static function init() {
//		add_action( 'admin_menu', array( 'PressinoUIBlocks', 'registerAdminPageWidgetsSettings' ) );
		
		add_filter('block_categories',  array('PressinoUIBlocks','actapp_block_category'), 10, 2);
		add_action('enqueue_block_editor_assets',  array('PressinoUIBlocks','actapp_init_blocks_content'),10,2);
		// add_action('enqueue_block_editor_assets',  array('PressinoUIBlocks','actapp_init_blocks'),10,2);
		// add_action('wp_enqueue_block_style',  array('PressinoUIBlocks','actapp_init_blocks_css'),20,2);
		// add_action('wp_enqueue_block_style',  array('ActAppCommon','setup_scripts'),20,2);
		// add_action('enqueue_block_editor_assets',  array('ActAppCommon','setup_scripts'),20,2);
		
		
		// add_action('wp_enqueue_scripts', array('ActAppCommon','setup_scripts'),20);
		add_action('wp_enqueue_scripts',  array('PressinoUIBlocks','actapp_init_blocks_content'),20,2);
		// add_action('wp_enqueue_scripts',  array('PressinoUIBlocks','actapp_init_blocks_css'),20,2);
		
		
		// add_action('admin_enqueue_scripts', array('ActAppCommon','setup_scripts'),20);
		add_action('admin_enqueue_scripts',  array('PressinoUIBlocks','actapp_init_blocks_content'),20,2);
		// add_action('admin_enqueue_scripts',  array('PressinoUIBlocks','actapp_init_admin_scripts'),20);
		// add_action('admin_enqueue_scripts',  array('PressinoUIBlocks','actapp_init_blocks_css'),20);

		// $tmplibloc = ACTIONAPP_WP_CORE_LIB_URL . '/';
		// add_editor_style($tmplibloc . 'built-lib/support-libs.css');
		// add_editor_style($tmplibloc . 'lib/semantic/dist/semantic.min.css');
		// add_editor_style(ACTIONAPP_WP_BASE_URL . '/css/wp-editor.css');

		// self::setup_data();
	}

	// //Custom acf endpoint;
	// public static function dev_endpoint( $request_data ) {
	// 	return array('version'=>'V1.1.1');
	// }

	
	public static function setup_data() {
		
// // register the endpoint;
// add_action( 'rest_api_init', function () {
// 	register_rest_route( 'aawm/v1', 'blocksdev/', array(
// 		'methods' => 'GET',
// 		'callback' => array('PressinoUIBlocks', 'dev_endpoint'),
// 		)
// 	);
// });
	}

	
	public static function baseDir() {
		return PRESSINO_UI_BLOCKS_DIR;
	}
	public static function baseURL() {
		return PRESSINO_UI_BLOCKS_URL;
	}
	

	//---- Admin Settings
	// public static function showAdminPageWidgetsSettings(){
	// 	include(PRESSINO_UI_BLOCKS_DIR . '/tpl/widgets-settings.php');
	// }

	
	// public static function getWidgetUI(){
	// 	return 'List UI Widget options here';
	// }
	// public static function registerAdminPageWidgetsSettings(){
	// 	add_menu_page( 
	// 		__( 'UI Widget Settings'),
	// 		'Action Blocks',
	// 		'manage_options',
	// 		'actappwidgetsettings',
	// 		array( 'PressinoUIBlocks', 'showAdminPageWidgetsSettings' ),
	// 		plugins_url( 'actapp-blocks/images/icon.png' ),
	// 		81
	// 	); 
	// }

}

//--- Demo of a widget that uses server side rendering
//--- *** This is a Designer Widget, Setup in ActAppDesigner
//require_once PRESSINO_UI_BLOCKS_DIR . '/blocks/actappdesign/ActAppDynamicDemo/Object.php';

add_action( 'init', array( 'PressinoUIBlocks', 'init' ) );



