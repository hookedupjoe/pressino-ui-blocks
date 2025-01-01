<?php
$url = empty( $attributes['url'] ) ? '' : $attributes['url'];
$postid = empty( $attributes['postid'] ) ? 0 : $attributes['postid'];

$shortcode = '[insert-design-elem url="' . $url . '" postid="' . $postid . '"]';
$rendered_shortcode = do_shortcode( $shortcode );
echo ($rendered_shortcode);