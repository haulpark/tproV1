// t_main_tab.js

$(document).ready(function(){
	
	// ============== main tab ==============
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('#tab_menu_2').click(function(){
		$('.side_tab_box').fadeIn();
	});

	$('#tab_menu_3').click(function(){
		$('.side_tab_lank_box').fadeIn();
	});


	$('#tab_menu_4').click(function(){
		$('.side_tab_store_box').fadeIn();
	});


	$('#tab_menu_5').click(function(){
		$('.side_tab_myinfo_box').fadeIn();
	});

	// ============== side tab 1 ==============
	$('ul.side_tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs li').removeClass('current');
		$('.side_tab_content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_box').hide();
	});

	// ============== side tab 2 ==============
	$('ul.side_tabs_lank li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs_lank li').removeClass('current');
		$('.side_tab_content_lank').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_lank_box').hide();
	});

	// ============== side tab 3 ==============
	$('ul.side_tabs_store li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs_store li').removeClass('current');
		$('.side_tab_content_store').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_store_box').hide();
	});


	// ============== side tab 4 ==============
	$('ul.side_tabs_myinfo li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.side_tabs_myinfo li').removeClass('current');
		$('.side_tab_content_myinfo').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_myinfo_box').hide();
	});

});
