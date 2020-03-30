//alert("hi"); //It's work
	$(document).ready(function(){
		$(".toggleBtn").click(function(){
			$("header").css("animation-delay", ".01s");
			$("header").slideToggle();
		});
	});
	$(window).on('resize', function(){
		var win = $(this);
		if(win.width() >= 576){
			$("header").show();
		} else {
			$("header").hide();
		}
	});

//////
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(10)
    .next()
    .fadeIn(10)
    .end()
    .appendTo('#slideshow');
}, 5000);


