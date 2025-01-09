<?php
/**
 * Class related to server side widget: PressinoInsertDesignElem
 * 
 * Copyright (c) 2025 Joseph Francis / hookedup, inc. 
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


if ( ! class_exists( 'PressinoInsertDesignElem' ) ) {
	/**
	 * Class PressinoInsertDesignElem
	 */
	class PressinoInsertDesignElem {
		/**
		 * Stack tracking inserted pages (for loop detection).
		 *
		 * @var  array Array of page ids inserted.
		 */
		protected $inserted_page_ids;

		/**
		 * Singleton plugin instance.
		 *
		 * @var object Plugin instance.
		 */
		protected static $instance = null;


		/**
		 * Access this plugin's working instance.
		 *
		 * @return object Object of this class.
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}


		/**
		 * Disable constructor to enforce a single plugin instance..
		 */
		protected function __construct() {
		}


		/**
		 * Action hook: WordPress 'init'.
		 *
		 * @return void
		 */
		public function insert_pages_init() {
			// Register the [insert] shortcode.
			add_shortcode( 'insert-design-elem', array( $this, 'actapp_handle_shortcode_insert_design_elem' ) );
		}


		/**
		 * Renders the gutenberg block (using legacy server-side rendering).
		 *
		 * @param  array $attr Array of block attributes.
		 * @return string      Rendered inserted page.
		 */
		public function block_render_callback( $attr ) {
            return 'testing 123';

			// Display attribute defaults to 'title'; otherwise it is the passed param,
			// and if the display param is 'custom', it is the value of the 'template'
			// param.
			$display = 'title';
			if ( isset( $attr['display'] ) && strlen( $attr['display'] ) > 0 ) {
				$display = esc_attr( $attr['display'] );
			}
			if ( 'custom' === $display && isset( $attr['template'] ) && strlen( $attr['template'] ) > 0 ) {
				$display = esc_attr( $attr['template'] );
			}

			$shortcode = sprintf(
				'[insert-design-elem page="%1$s" display="%2$s"%3$s%4$s%5$s%6$s%7$s%8$s]',
				isset( $attr['page'] ) && strlen( $attr['page'] ) > 0 ? esc_attr( $attr['page'] ) : '0',
				$display,
				isset( $attr['class'] ) && strlen( $attr['class'] ) > 0 ? ' class="' . esc_attr( $attr['class'] ) . '"' : '',
				isset( $attr['id'] ) && strlen( $attr['id'] ) > 0 ? ' id="' . esc_attr( $attr['id'] ) . '"' : '',
				isset( $attr['querystring'] ) && strlen( $attr['querystring'] ) > 0 ? ' querystring="' . esc_attr( $attr['querystring'] ) . '"' : '',
				isset( $attr['size'] ) && strlen( $attr['size'] ) > 0 ? ' size="' . esc_attr( $attr['size'] ) . '"' : '',
				isset( $attr['inline'] ) && 'true' === $attr['inline'] ? ' inline' : '',
				isset( $attr['public'] ) && 'true' === $attr['public'] ? ' public' : ''
			);

			$rendered_shortcode = do_shortcode( $shortcode );

			
			return $rendered_shortcode;
		}



		/**
		 * Shortcode hook: Replace the [insert ...] shortcode with the inserted page's content.
		 *
		 * @param  array  $atts    Shortcode attributes.
		 * @param  string $content Content to replace shortcode.
		 * @return string          Content to replace shortcode.
		 */
	    public function actapp_handle_shortcode_insert_design_elem( $atts, $content = null ) {
			global $wp_query, $post, $wp_current_filter;
			

			// Shortcode attributes.
			$attributes = shortcode_atts(
				array(
					'url'        => '0',
					'postid'      => 0,
				),
				$atts,
				'insert'
			);


			

			
			// Validation checks.
			if ( '0' === $attributes['url'] && 0 === $attributes['postid'] ) {
				return $content;
			}
			$page = $attributes['url'] > 0 ? $attributes['url'] : $attributes['postid'];

			// Get the WP_Post object from the provided slug, or ID.
			if ( ! is_numeric( $page ) ) {
	
					
				//$url='de1';//test

				$inserted_page = get_page_by_path( $page , OBJECT, 'actappelem');
			} else {
				$inserted_page = get_post( intval($page ) );
			}

			
			// // Prevent unprivileged users from inserting private posts from others.
			// if ( is_object( $inserted_page ) && 'publish' !== $inserted_page->post_status ) {
			// 	$post_type = get_post_type_object( $inserted_page->post_type );
			// 	$parent_post_author_id = intval( get_the_author_meta( 'ID' ) );
			// 	if ( ! user_can( $parent_post_author_id, $post_type->cap->read_post, $inserted_page->ID ) ) {
			// 		$inserted_page = null;
			// 	}
			// }

			// // Loop detection: check if the page we are inserting has already been
			// // inserted; if so, short circuit here.
			// if ( ! is_array( $this->inserted_page_ids ) ) {
			// 	// Initialize stack to the main page that contains inserted page(s).
			// 	$this->inserted_page_ids = array( get_the_ID() );
			// }
			// if ( isset( $inserted_page->ID ) ) {
			// 	if ( ! in_array( $inserted_page->ID, $this->inserted_page_ids, true ) ) {
			// 		// Add the page being inserted to the stack.
			// 		$this->inserted_page_ids[] = $inserted_page->ID;
			// 	} else {
			// 		// Loop detected, so exit without rendering this post.
			// 		return $content;
			// 	}
			// }

			// Set any querystring params included in the shortcode.
			// parse_str( $attributes['querystring'], $querystring );
			// $original_get = $_GET; // phpcs:ignore WordPress.Security.NonceVerification
			// $original_request = $_REQUEST; // phpcs:ignore WordPress.Security.NonceVerification
			// foreach ( $querystring as $param => $value ) {
			// 	$_GET[ $param ] = $value;
			// 	$_REQUEST[ $param ] = $value;
			// }
			// $original_wp_query_vars = $GLOBALS['wp']->query_vars;
			// if (
			// 	! empty( $querystring ) &&
			// 	isset( $GLOBALS['wp'] ) &&
			// 	method_exists( $GLOBALS['wp'], 'parse_request' ) &&
			// 	empty( $GLOBALS['wp']->query_vars['rest_route'] )
			// ) {
			// 	$GLOBALS['wp']->parse_request( $querystring );
			// }

			// Use "Normal" insert method (get_post).
				// If we couldn't retrieve the page, fire the filter hook showing a not-found message.
				if ( null === $inserted_page ) {
					// Short-circuit since we didn't find the page.
					$content = 'Nothing Found';
					return $content;
				}

				// Start output buffering so we can save the output to a string.
				ob_start();

			
				/**
				 * Show either the title, link, content, everything, or everything via a
				 * custom template.
				 *
				 * Note: if the sharing_display filter exists, it means Jetpack is
				 * installed and Sharing is enabled; this plugin conflicts with Sharing,
				 * because Sharing assumes the_content and the_excerpt filters are only
				 * getting called once. The fix here is to disable processing of filters
				 * on the_content in the inserted page.
				 *
				 * @see https://codex.wordpress.org/Function_Reference/the_content#Alternative_Usage
				 */
			
                $content = get_post_field( 'post_content', $inserted_page->ID );
                // if ( $attributes['should_apply_the_content_filter'] ) {
                //     $content = apply_filters( 'the_content', $content );
                // }
                echo $content;
                
				// Save output buffer contents.
				$content = ob_get_clean();



			// 			// Unset any querystring params included in the shortcode.
			// $_GET = $original_get;
			// $_REQUEST = $original_request;
			// $GLOBALS['wp']->query_vars = $original_wp_query_vars;

			// Loop detection: remove the page from the stack (so we can still insert
			// the same page multiple times on another page, but prevent it from being
			// inserted multiple times within the same recursive chain).
			// if ( isset( $inserted_page->ID ) ) {
			// 	foreach ( $this->inserted_page_ids as $key => $page_id ) {
			// 		if ( $page_id === $inserted_page->ID ) {
			// 			unset( $this->inserted_page_ids[ $key ] );
			// 		}
			// 	}
			// } elseif ( is_array( $inserted_page ) && ! empty( $inserted_page ) ) {
			// 	// Legacy template code populates $inserted_page with query_posts()
			// 	// output. Remove each from the stack (should just be a single page).
			// 	foreach ( $inserted_page as $page ) {
			// 		foreach ( $this->inserted_page_ids as $key => $page_id ) {
			// 			if ( $page_id === $page->ID ) {
			// 				unset( $this->inserted_page_ids[ $key ] );
			// 			}
			// 		}
			// 	}
			// }

			return $content;
		}

		/**
		 * Default filter for insert_pages_wrap_content.
		 *
		 * @param  string $content    Content of shortcode.
		 * @param  array  $posts      Post data of inserted page.
		 * @param  array  $attributes Shortcode attributes.
		 * @return string             Content to replace shortcode.
		 */
		public function insert_pages_wrap_content( $content, $posts, $attributes ) {
			return sprintf(
				'<%1$s data-post-id="%2$s" class="insert-page insert-page-%2$s %3$s"%4$s>%5$s</%1$s>',
				esc_attr( $attributes['wrapper_tag'] ),
				esc_attr( $attributes['page'] ),
				esc_attr( $attributes['class'] ),
				empty( $attributes['id'] ) ? '' : ' id="' . esc_attr( $attributes['id'] ) . '"',
				$content
			);
		}

		
		/**
		 * Indicates whether a particular post type is able to be inserted.
		 *
		 * @param  boolean $type Post type.
		 * @return boolean       Whether post type is insertable.
		 */
		private function is_post_type_insertable( $type ) {
			return ! in_array(
				$type,
				array(
					'nav_menu_item',
					'attachment',
					'revision',
					'customize_changeset',
					'oembed_cache',
					// Exclude Flamingo messages (created via Contact Form 7 submissions).
					// See: https://wordpress.org/support/topic/plugin-hacked-14/.
					'flamingo_inbound',
				),
				true
			);
		}

		/**
		 * Registers the theme widget for inserting a page into an area.
		 *
		 * @return void
		 */
		public function insert_pages_widgets_init() {
			register_widget( 'InsertPagesWidget' );
		}

		/**
		 * Render post meta as an unordered list.
		 *
		 * Note: This function sanitizes postmeta value via wp_kses_post(); the
		 * core WordPress function the_meta() does not.
		 *
		 * @see https://developer.wordpress.org/reference/functions/the_meta/
		 *
		 * @param  int $post_id Post ID.
		 */
		public function the_meta( $post_id = 0 ) {
			if ( empty( $post_id ) ) {
				$post_id = get_the_ID();
			}

			$keys = get_post_custom_keys( $post_id );
			if ( $keys ) {
				$li_html = '';
				foreach ( (array) $keys as $key ) {
					$keyt = trim( $key );
					if ( is_protected_meta( $keyt, 'post' ) ) {
						continue;
					}

					$values = array_map( 'trim', get_post_custom_values( $key, $post_id ) );
					$value  = implode( ', ', $values );

					// Sanitize post meta values.
					$value = wp_kses_post( $value );

					$html = sprintf(
						"<li><span class='post-meta-key'>%s</span> %s</li>\n",
						/* translators: %s: Post custom field name. */
						sprintf( _x( '%s:', 'Post custom field name', 'insert-pages' ), $key ),
						$value
					);

					/**
					 * Filters the HTML output of the li element in the post custom fields list.
					 *
					 * @since 2.2.0
					 *
					 * @param string $html  The HTML output for the li element.
					 * @param string $key   Meta key.
					 * @param string $value Meta value.
					 */
					$li_html .= apply_filters( 'the_meta_key', $html, $key, $value );
				}

				if ( $li_html ) {
					echo "<ul class='post-meta'>\n{$li_html}</ul>\n";
				}
			}
		}
	}
}

$insert_design_elem_pages_plugin = null;

// Initialize InsertPagesPlugin object.
if ( class_exists( 'PressinoInsertDesignElem' ) ) {
	$insert_design_elem_pages_plugin = PressinoInsertDesignElem::get_instance();
}

add_action('init', array( $insert_design_elem_pages_plugin, 'insert_pages_init'));
