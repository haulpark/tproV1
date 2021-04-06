// t_main.js

$(document).ready(function(){
	
	// ============== main tab ==============
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	// ============== side tab 1 ==============
	$('ul.side_tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs li').removeClass('current');
		$('.side_tab_content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	// ============== side tab 2 ==============
	$('ul.side_tabs_lank li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs_lank li').removeClass('current');
		$('.side_tab_content_lank').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	// ============== side tab 3 ==============
	$('ul.side_tabs_store li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs_store li').removeClass('current');
		$('.side_tab_content_store').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});


	// ============== side tab 4 ==============
	$('ul.side_tabs_myinfo li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs_myinfo li').removeClass('current');
		$('.side_tab_content_myinfo').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});


});
