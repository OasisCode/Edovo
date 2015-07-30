<?php

/*

Template Name: Single Post

*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			
			<div class="main-description">
												 <!--**************** Blog ***********************-->
				<div id="blog-box">
					<div class="container">
						<div class="row">
							                     <!--**************** Sidebar ********************-->
							<div class="col-md-4 col-sm-3">
								<div class="sidebar">
									<?php
								       $args = array( 'posts_per_page' => 100, 'orderby'=> 'date', 'order' => 'DESC' );
								       $loop = new WP_Query( $args );
								      ?>

								      <?php 
									    while ( $loop->have_posts() ) : $loop->the_post(); 
									    ?> 
								      	
								      	<div class="title">
								      		<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>" data-post-id="<?php the_ID(); ?>">
								      			<div class="post-link">
									      			<h2>
										      			<?php the_title(); ?>
									      			</h2>
									      		</div>
								      		</a>
								      		<div class="border-bottom"></div>
								      	</div>
								      
								   	<?php endwhile; ?>

								</div>
							</div>
												<!--******************* Blog Post **********************-->
							<div class="col-md-8 col-sm-9">
								<div class="blog-post">

									<?php while ( have_posts() ) : the_post(); ?>
									<?php $current_blog_id =  get_the_id(); ?>
								      	
								      	<div class="intro">
									      	<div class="post-title">
									      		<h2>
										      		<?php the_title(); ?>
									      		</h2>
									      	</div>

									      	<div class="post-author">
									      		<p>By: <span><?php the_author(); ?></span></p>
									      	</div>

									      	<div class="post-date">
									      		<p><?php the_time('F j, Y'); ?></p>
									      	</div>

									      	<div class="post-tags">
									      		<p><?php the_tags('Tagged: '); ?></p>
									      	</div>
									    </div>

								      	<div class="post-content">
								      		<div class="border-left"></div>
								      			<?php if(get_adjacent_post(false, '', true)): ?>
													
													<div class="next-post">
														<?php previous_post_link('%link',''); ?>
													</div>

												<?php else: ?>
													<div class="edovo-logo"></div>
												<?php endif; ?>

												<?php if(get_adjacent_post(false, '', false)): ?>
													
													<div class="previous-post">
														<?php next_post_link('%link',''); ?>
													</div>
												 
												<?php endif; ?>
								      		
								      		<p><?php the_content(); ?></p>
								      	</div>
								      
								    <?php endwhile; ?>
								</div>
							</div> <!--End Blog Post -->

						</div>
					</div>
				</div>
			
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>

<script>
	jQuery(document).ready(function( $ ) {

		$('.title a[data-post-id = <?php echo $current_blog_id; ?>]').parent().addClass('current-post');

	});
</script>