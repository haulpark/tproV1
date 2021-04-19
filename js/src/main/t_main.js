// t_main.js

var windowW = window.innerWidth;
var mobM = $('.mob_menu');

var storeM = $('.store_modal');
var storeExit = $('.store_modal_exit_btn');

(function($){

	$('.mob_icon').click(function(e){
		e.preventDefault;

		mobM.fadeToggle();
		
	});

	$('.store_content_5').click(function(e){
		e.preventDefault();

		storeM.fadeIn();
	});

	storeExit.click(function(e){
		e.preventDefault();

		storeM.fadeOut();
	});

})(jQuery);

function myFunction() {
  window.open("../certi/t_certi.html", "", "left=0, top=0, toolbar=no, location=no,\
  directories=no, status=no, menubar=no, scrollbars=no\
  resizable=yes, width=375, height=700");
}