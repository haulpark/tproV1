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