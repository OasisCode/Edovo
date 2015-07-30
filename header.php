<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package JaySussman
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'oasiscode' ); ?></a>

		<header id="masthead" class="site-header" role="banner">

				

			<nav id="site-navigation" class="navbar navbar-default main-navigation">
				<div class="container">
			    <!-- Brand and toggle get grouped for better mobile display -->
				    <div class="navbar-header">
				      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu" aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				      </button>
				      <a class="navbar-brand" href="#">
				      	<div class="site-branding">
							<div class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class ="mainTitle" rel="home"><img src="<?php bloginfo('wpurl') ?>/wp-content/uploads/2015/06/edovo-logo.png"/></a></div>
							<!-- <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2> -->
							<p class="title-large">a Jail Education Solutions Company</p>
							<p class="title-small">Jail Education Solutions</p>
						</div><!-- .site-branding -->
					</a>
				    </div>

				    <!-- Collect the nav links, forms, and other content for toggling -->
				    <div class="collapse navbar-collapse" id="nav-menu">

						<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu', 'menu_class' => 'nav navbar-nav' ) ); ?>
					
				    </div><!-- /.navbar-collapse -->
				</div>
			</nav>

		</header><!-- #masthead -->

		<div id="content" class="site-content">