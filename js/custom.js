// jQuery(document).ready(function( $ ) {

// 	$(window).scroll(function() {

//     var scroll = $(window).scrollTop();
//     var headerHeight = $("#masthead").outerHeight()*0.5;

//     if (scroll >= headerHeight)
//         $("#masthead").addClass("fix-head");

//    	else 
//    		$("#masthead").removeClass("fix-head");
// 	});

// });

jQuery(document).ready(function( $ ) {

$('#top-carousel').hover(function(){
		$('.carousel').carousel({
			  interval: false
		});
	});
});

jQuery(document).ready(function( $ ){
	var opentime = 1400;
	var closetime = 400;
	var $root = $('html, body');
	
//------------------------------------------------------------------------------------------------ Interest Button
	$(".interest-button").click(function(){
		var interestid = this.id;
		var interestitem = interestid.replace("_" , " ");
		$("#interest").val(interestitem);
		$("#name").focus();
        $root.animate({
				scrollTop: $("#wpcf7-f36-o2").offset().top - 95
			}, 500);
    });


//-----------------------------------------------------------------------------------------------Contact Us Scroll
	$(".contact").click(function(){
        $root.animate({
				scrollTop: $("#getedovo").offset().top - 82
			}, 500);
    });

//------------------------------------------------------------------------------------------------ Small Screen Drop Downs

if($(window).width() < 991) {
//--------------------------------------------------------------Correctional Security
	$("#hide-cs").click(function(){
        $("#solution-cs-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").show('slide', {direction: 'up'}, closetime);
        $root.animate({
				scrollTop: $("#correctional-security").offset().top - 82
			}, 500);
    });

	$("#show-cs").click(function(){
		$("#solution-ep-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#solution-up-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").delay(closetime).show('slide', {direction: 'up'}, closetime);	

		$("#learn-more-cs").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);
		$("#solution-cs-smallscreen").delay(500).addClass("open").show('slide', {direction: 'up'}, opentime);
	});

	$("#hide-cs-top").click(function(){
        $("#solution-cs-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);
    });

    

//-----------------------------------------------------------------Expansive Programming
 	$("#hide-ep").click(function(){
        $("#solution-ep-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").show('slide', {direction: 'up'}, closetime);
        $root.animate({
				scrollTop: $("#expansive-programming").offset().top - 82
			}, 500);
    });

    $("#show-ep").click(function(){
		$("#solution-cs-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#solution-up-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#learn-more-ep").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);
		$("#solution-ep-smallscreen").delay(closetime).addClass("open").show('slide', {direction: 'up'}, opentime);
	});

	$("#hide-ep-top").click(function(){
        $("#solution-ep-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);
    });

//-------------------------------------------------------------------------Unmatched Platform
	$("#hide-up").click(function(){
        $("#solution-up-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").show('slide', {direction: 'up'}, closetime);        
        $root.animate({
				scrollTop: $("#unmatched-platform").offset().top - 82
			}, 500);
    });

    $("#show-up").click(function(){
		$("#solution-cs-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#solution-ep-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#learn-more-up").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-up").delay(closetime).show('slide', {direction: 'up'}, closetime);
		$("#solution-up-smallscreen").delay(closetime).addClass("open").show('slide', {direction: 'up'}, opentime);
	});

	$("#hide-up-top").click(function(){
        $("#solution-up-smallscreen").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").delay(closetime).show('slide', {direction: 'up'}, closetime);
    }); 
  }
  else {
//---------------------------------------------------------------------------------------------------Correctional Security
	$("#hide-cs").click(function(){
        $("#solution-cs").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").show('slide', {direction: 'up'}, closetime);
        $root.animate({
				scrollTop: $("#solutionscroll").offset().top
			}, 500);
    });

	$("#show-cs").click(function(){
		$("#solution-ep").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#solution-up").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").delay(closetime).show('slide', {direction: 'up'}, closetime);	

		$("#learn-more-cs").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);
		$("#solution-cs").delay(500).addClass("open").show('slide', {direction: 'up'}, opentime);
	});

	$("#hide-cs-top").click(function(){
        $("#solution-cs").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);
    });

    

//---------------------------------------------------------------------------------------------------Expansive Programming
 	$("#hide-ep").click(function(){
        $("#solution-ep").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").show('slide', {direction: 'up'}, closetime);
        $root.animate({
				scrollTop: $("#solutionscroll").offset().top 
			}, 500);
    });

    $("#show-ep").click(function(){
		$("#solution-cs").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#solution-up").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#learn-more-ep").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);
		$("#solution-ep").delay(closetime).addClass("open").show('slide', {direction: 'up'}, opentime);
	});

	$("#hide-ep-top").click(function(){
        $("#solution-ep").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);
    });

//-----------------------------------------------------------------------------------------------------Unmatched Platform
	$("#hide-up").click(function(){
        $("#solution-up").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").show('slide', {direction: 'up'}, closetime);        
        $root.animate({
				scrollTop: $("#solutionscroll").offset().top 
			}, 500);
    });

    $("#show-up").click(function(){
		$("#solution-cs").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-cs").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-cs").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#solution-ep").removeClass("open").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-ep").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-ep").delay(closetime).show('slide', {direction: 'up'}, closetime);

		$("#learn-more-up").hide('slide', {direction: 'up'}, closetime);
		$("#button-dots-up").delay(closetime).show('slide', {direction: 'up'}, closetime);
		$("#solution-up").delay(closetime).addClass("open").show('slide', {direction: 'up'}, opentime);
	});

	$("#hide-up-top").click(function(){
        $("#solution-up").removeClass("open").hide('slide', {direction: 'up'}, closetime);
        $("#button-dots-up").hide('slide', {direction: 'up'}, closetime);
        $("#learn-more-up").delay(closetime).show('slide', {direction: 'up'}, closetime);
    });
  };

//-------------------------------------------------------------------------------------------------------Sidebar Height

	$(".sidebar").css({'height':($(".blog-post").height()+100)});
                     //------------------------------------------------------//
	var currentpost = $(".post-link").text();
	if (window.location.href.indexOf(currentpost) > -1) {
			$(".post-link").addClass("current-post");
		};

//-------------------------------------------------------------------------------------------------------Sidebar Height

	$('.title a').click(function() {
        $(this).parent().addClass('focused');
    })

//-------------------------------------------------------------------------------------------------------Menu Classes

$( "ul#primary-menu li:nth-child(4), ul#primary-menu li:nth-child(5), ul#primary-menu li:nth-child(6)" ).addClass( "full-page" );

});  // End of Document Ready Function