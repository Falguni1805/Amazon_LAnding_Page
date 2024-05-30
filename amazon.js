// //iframer video
let ifTest = document.getElementById('hero_video');
let videoPath = 'https://file-examples.com/storage/fe63ea2155630fa7ba2b829/2017/04/file_example_MP4_480_1_5MG.mp4';
let videoHtml = '<html><body><video width="100%" autoplay="true" loop="true" muted="true" ><source src="' + videoPath + '" type="video/mp4" /></video></body></html>';

// ifTest.setAttribute('srcdoc', videoHtml);
// ifTest.setAttribute('style', 'width:264px; height:150px;')
//timeline
//twenty twenty
$(function(){
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
  });
  jQuery(document).ready(function($){
    "use strict";
    var $timeline_block = $('.cd-timeline-block');

    // Function to check if element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Hide timeline blocks which are initially outside the viewport
    $timeline_block.each(function(){
        if (!isElementInViewport(this)) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });
    function callbackFunc() {
        for (var i = 0; i < timeline_block.length; i++) {
          if (isElementInViewport(timeline_block [i])) {
            timeline_block [i].classList.add("in-view");
          }
        }
      }
    // On scrolling, show/animate timeline blocks when they enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if (isElementInViewport(this) && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
//      // listen for events
//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("resize", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);
});




// NOS
// Enforce 3 digit thousands delimiter with commas 
// accepts: number
// returns: string with commas every third number
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
	return val;
}

// Animate the Number
// accepts: jQuery element
// forces a number, feeds it to the comma function, and animates from 0 to the value of data-n
function animateNumber(el){
	// var data = parseInt(this.dataset.n, 10);
	var dataString = parseFloat(el.attr('data-n').replace(/,/g,''));
	var data = parseInt(dataString, 10);
	var props = {
		"from": {
			"count": 0
		},
		"to": { 
			"count": data
		}
	};
	$(el).addClass('animating')
	$(props.from).animate(props.to, {
		duration: 1000 * 1,
		step: function (now, fx) {
			$(el).text(commaSeparateNumber(Math.floor(now)));
		},
		complete:function() {
			if (visibleEl(el[0]) > 0) {
				$(el).removeClass('animating')
				$(el).addClass('completed');
			}
		}
	});
}

// Check if element is visible
// Accepts: DOM element (not jQuery object)
// Returns: 0 if not visible, or a positive integer based on visible position
// TODO: IntersectionObserver is a better solution these days
function visibleEl(el){
	var elHeight = el.offsetHeight,
		elRect = el.getBoundingClientRect(),
		elTop = elRect.top - 50, 
		// elBottom = elRect.bottom - 50;
		winHeight = window.innerHeight;
	var position = Math.max(0, winHeight - (elTop + elHeight));
	// console.log(elHeight, elTop, what);
	return position;
}

// Initialize Stat Animation
function dataAnimateInit() {
	$('.js-data-animate').each(function(){
		// console.log(visibleEl(this));
		if (visibleEl(this) > 0 && !$(this).hasClass('completed') && !$(this).hasClass('animating')) {
			animateNumber($(this));
		}
	});
}

// Scroll Event
// checks for each instance as the user scrolls
$(window).scroll(function(){
	dataAnimateInit();
});

// Ready Event
$(document).ready(function(){
	dataAnimateInit();
});






//scratch card

console.log('connected');

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("scratch");
    const context = canvas.getContext("2d");

    const init = () => {
        let gradientColor = context.createLinearGradient(0, 0, 135, 135);
        gradientColor.addColorStop(0, "#267cee");
        gradientColor.addColorStop(1, "#6414e9");
        context.fillStyle = gradientColor;
        context.fillRect(0, 0, 200, 200);
        context.font = "bold 14px Tahoma";
        context.fillStyle = "#fff";
        context.textAlign = "center";
        context.fillText("Scratch & Win", 100, 40);
        context.font = "9px Tahoma";
        context.fillText("100% Guaranteed Offer", 100, 180);
        let img = new Image();
        img.onload = function () {
            context.drawImage(img, 50, 50, 100, 100);
        };
        img.src = "https://img.icons8.com/?size=512&id=12191&format=png";
    };

    let mouseX = 0;
    let mouseY = 0;
    let isDragged = false;

    const handleDown = (event) => {
        isDragged = true;
        getXY(event);
        scratch(mouseX, mouseY);
    };

    const handleMove = (event) => {
        event.preventDefault();
        if (isDragged) {
            getXY(event);
            scratch(mouseX, mouseY);
        }
    };

    const handleUp = () => {
        isDragged = false;
    };

    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("mousemove", handleMove, { passive: false });
    canvas.addEventListener("mouseup", handleUp);

    const getXY = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    };

    const scratch = (x, y) => {
        context.globalCompositeOperation = "destination-out";
        context.beginPath();
        context.arc(x, y, 40, 0, 2 * Math.PI);
        context.fill();
    };

    window.onload = init();
});





// what we offer
// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });




//************* card effect *************

jQuery(document).ready(function($) {
    function stickySidebar(){
        if(jQuery(".b2b-inquiry-form").offset()) {
            main_area_pos = jQuery(".b2b-inquiry-form").offset().top;
        }
        main_area_height = jQuery(".b2b-inquiry-form").outerHeight();
        margin_top = jQuery(".header").hasClass("sticky-header") ? 60 : 10;
        margin_bottom = 10;
        var fixedSideTop = fixedSideBottom = fixedSideTop_r = fixedSideBottom_r = 0;
        cur_Y = jQuery(window).scrollTop();
        if(jQuery(".product-section-scroll").outerHeight() < main_area_height) {
            if(jQuery(window).height() < jQuery(".product-section-scroll").outerHeight() + margin_top + margin_bottom) {
                if(main_area_pos >= cur_Y + margin_top) {
                    left_side_top = 0;
                } else if(cur_Y >= main_area_pos + main_area_height - jQuery(window).height()) {
                    left_side_top = main_area_height - jQuery(".product-section-scroll").outerHeight();
                } else {
                    if ( cur_Y > pre_Y ) {
                        if(fixedSideTop) {
                            fixedSideTop = 0;
                            left_side_top = jQuery(".product-section-scroll").offset().top - main_area_pos;
                        } else if(!fixedSideBottom && jQuery(".product-section-scroll").outerHeight() + jQuery(".product-section-scroll").offset().top < cur_Y + jQuery(window).height()) {
                            fixedSideBottom = 1;
                            left_side_top = cur_Y - (main_area_pos + jQuery(".product-section-scroll").outerHeight() - jQuery(window).height()) - 10
                        }
                    } else {
                        if(fixedSideBottom) {
                            fixedSideBottom = 0;
                            left_side_top = cur_Y - main_area_pos - jQuery(".product-section-scroll").outerHeight() + jQuery(window).height() - 10;
                        } else if(!fixedSideTop && jQuery(".product-section-scroll").offset().top >= cur_Y + margin_top) {
                            fixedSideTop = 1;
                            left_side_top = cur_Y - main_area_pos + margin_top;
                        }

                    }
                }
            } else {
                if ( cur_Y >= ( main_area_pos - margin_top ) && cur_Y + jQuery(".product-section-scroll").outerHeight() + margin_top < main_area_pos + main_area_height) {
                    left_side_top = cur_Y - main_area_pos + margin_top;
                } else if(cur_Y + jQuery(".product-section-scroll").outerHeight() + margin_top > main_area_pos + main_area_height) {
                    left_side_top = main_area_height - jQuery(".product-section-scroll").outerHeight();
                } else {
                    left_side_top = 0;
                }

                fixedSideTop = fixedSideBottom = 0;
            }
            jQuery(".product-section-scroll").css("top",left_side_top + "px");
        } else {
            jQuery(".product-section-scroll").css("top",0);
        }
       
        pre_Y = cur_Y;
    }           
});

window.addEventListener("scroll", function(event) {
    if (window.scrollY > document.querySelectorAll(".aud-textin")[0]?.offsetTop - (window.innerHeight/2) && window.scrollY < (document.querySelectorAll(".aud-textin")[3]?.offsetTop + document.querySelectorAll(".aud-textin")[3]?.clientHeight)) {
        for (let i = 0; i < document.querySelectorAll(".aud-textin").length; i++) {
            if (document.querySelectorAll(".aud-textin")[i]) { // Check if the element exists
                if (window.scrollY > document.querySelectorAll(".aud-textin")[i].offsetTop && window.scrollY < (document.querySelectorAll(".aud-textin")[i].offsetTop + document.querySelectorAll(".aud-textin")[i].clientHeight)) {
                    document.getElementById("counter").innerHTML = i+1;
                }
            }
        }
    }
}, false);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        markers: false,
        start: "top top",
        end: "+=500",
        scrub: 0.1 // Adjust the scrub value to slow down the animation
    }
});

tl.from(".card0", {
    yPercent: 0,
    opacity: 1,
    duration: 1, // Adjust the duration of the animation
    ease: "power2.inOut" // Apply a different easing function if needed
});

// Add delays between animations to slow down the overall effect
tl.from(".card1", {
    yPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.1 // Add a delay between animations
});

tl.from(".card2", {
    yPercent: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.1
});


// timeline 
(function () {  
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
          var divs = items[i].querySelectorAll("div");
          for (var j = 0; j < divs.length; j++) {
            divs[j].classList.add("fadeInUp");
          }
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  

  
  

// Case Studies

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})