// t_main.js

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('ul.side_tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs li').removeClass('current');
		$('.side_tab_content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
