<?php
$url = empty( $attributes['url'] ) ? 'no element' : $attributes['url'];

$shortcode = '[insert-design-elem url="' . $url . '"]';
$rendered_shortcode = do_shortcode( $shortcode );
echo ($rendered_shortcode);