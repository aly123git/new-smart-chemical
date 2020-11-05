/*
Theme Name:     FabTheme
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "fabtheme".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 .fabtheme-owl-1
		1.2 .fabtheme-owl-2
	2. counter up
		2.1 .fabtheme-counter-up
	3. wow
	4. navigation
		4.1 #fabtheme-navbar
	5. scroll top
		5.1 .fabtheme-scrolltop
		5.2 .fabtheme-sroll
		5.3 .fabtheme-thetop
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".fabtheme-owl-1").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
$(document).ready(function(){
	$(".fabtheme-owl-2").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});
/* END OF OWL CAROUSEL */
/* COUNTER UP */
$(document).ready(function () {
	$('.fabtheme-counter-up').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
});
/* END OF COUNTER UP */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#fabtheme-navbar').addClass('solid');
	    } else {
	        $('#fabtheme-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#fabtheme-navbar').hide();
	    }
	    else{
	    	$('#fabtheme-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* SCROLL TOP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.fabtheme-scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.fabtheme-scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
	$(".fabtheme-scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".fabtheme-thetop").offset().top - 0
		},3000, 'easeInOutExpo');
		return false;
	})
});
/* END OF SCROLL TOP */
/* END OF CUSTOM JS */


function currentDiv(n) {
	showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-opacity-off";
  }




  function initComparisons() {
	var x, i;
	/* Find all elements with an "overlay" class: */
	x = document.getElementsByClassName("img-comp-overlay");
	for (i = 0; i < x.length; i++) {
	  /* Once for each "overlay" element:
	  pass the "overlay" element as a parameter when executing the compareImages function: */
	  compareImages(x[i]);
	}
	function compareImages(img) {
	  var slider, img, clicked = 0, w, h;
	  /* Get the width and height of the img element */
	  w = img.offsetWidth;
	  h = img.offsetHeight;
	  /* Set the width of the img element to 50%: */
	  img.style.width = (w / 2) + "px";
	  /* Create slider: */
	  slider = document.createElement("DIV");
	  slider.setAttribute("class", "img-comp-slider");
	  /* Insert slider */
	  img.parentElement.insertBefore(slider, img);
	  /* Position the slider in the middle: */
	  slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
	  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
	  /* Execute a function when the mouse button is pressed: */
	  slider.addEventListener("mousedown", slideReady);
	  /* And another function when the mouse button is released: */
	  window.addEventListener("mouseup", slideFinish);
	  /* Or touched (for touch screens: */
	  slider.addEventListener("touchstart", slideReady);
	   /* And released (for touch screens: */
	  window.addEventListener("touchend", slideFinish);
	  function slideReady(e) {
		/* Prevent any other actions that may occur when moving over the image: */
		e.preventDefault();
		/* The slider is now clicked and ready to move: */
		clicked = 1;
		/* Execute a function when the slider is moved: */
		window.addEventListener("mousemove", slideMove);
		window.addEventListener("touchmove", slideMove);
	  }
	  function slideFinish() {
		/* The slider is no longer clicked: */
		clicked = 0;
	  }
	  function slideMove(e) {
		var pos;
		/* If the slider is no longer clicked, exit this function: */
		if (clicked == 0) return false;
		/* Get the cursor's x position: */
		pos = getCursorPos(e)
		/* Prevent the slider from being positioned outside the image: */
		if (pos < 0) pos = 0;
		if (pos > w) pos = w;
		/* Execute a function that will resize the overlay image according to the cursor: */
		slide(pos);
	  }
	  function getCursorPos(e) {
		var a, x = 0;
		e = e || window.event;
		/* Get the x positions of the image: */
		a = img.getBoundingClientRect();
		/* Calculate the cursor's x coordinate, relative to the image: */
		x = e.pageX - a.left;
		/* Consider any page scrolling: */
		x = x - window.pageXOffset;
		return x;
	  }
	  function slide(x) {
		/* Resize the image: */
		img.style.width = x + "px";
		/* Position the slider: */
		slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
	  }
	}
  }


