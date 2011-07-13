<?php
/*
  Plugin Name: MarcTV Youtube Bar
  Plugin URI: http://www.marctv.de
  Version: 1.3
  Author: Marc Tönsing
  Author URI: http://www.marctv.de
  License: GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.
  your option) any later version.
 */


function marctv_youtube_bar_scripts() {
  $version = '1.3';
  wp_enqueue_style(
          "jquery.marctv-youtube-bar-style", WP_PLUGIN_URL . "/marctv-youtube-bar/marctv-youtube-bar.css",
          false, $version);

  wp_enqueue_script(
          "jquery.marctv-youtube-bar", WP_PLUGIN_URL . "/marctv-youtube-bar/jquery.marctv-youtube-bar.js",
          array("jquery", "colorbox"), $version, 0);

  wp_enqueue_script(
          "jquery.marctv-youtube-bar-init", WP_PLUGIN_URL . "/marctv-youtube-bar/jquery.marctv-youtube-bar-init.js",
          array("jquery", "colorbox", "jquery.marctv-youtube-bar"), $version, 1);
}

add_action('wp_print_styles', 'marctv_youtube_bar_scripts');
?>