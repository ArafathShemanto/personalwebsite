(function ($) {
"use strict";
	// preloader
	$(window).on('load', function(){
		$('.preloader').delay(300).fadeOut(500);
	});	

// menu
$('.open-menu-icon').click(function(){
	$(".side-navbar").toggleClass("nav-open");
});

// MOBILE MENU
jQuery('#mobile-menu').meanmenu({
	container: "header"
});

// scrollup bottom arrow
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});


// scrollIt for nav to content scroll

$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});




// // ripples
// $('.home-area').ripples({
// 	resolution: 512,
// 	dropRadius: 20,
// });
	


// bar
$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();


$('.count').counterUp({
	delay: 10,
	time: 10000
});

// skrollr
var s = skrollr.init({
	render: function(data) {
		//Log the current scroll position.
		// console.log(data.curTop);
	}
});

// owl carosel
$('.service-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
						items:1,
						nav:false
        },
        767:{
            items:3
        },
        992:{
            items:4
        }
    }
})
// Typed js for typing
var typed3 = new Typed('.typed', {
	strings: ['frontend web developer','creative web designer'],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});



/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});



	// disable inspect
	document.onkeydown = function(e) {
		if(event.keyCode == 123) {
		return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
		return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
		return false;
		}
		if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
		return false;
		}
		}


})(jQuery);	