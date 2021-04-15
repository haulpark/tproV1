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

	$('.side_tab_box_dt').click(function(){
		$('.side_tab_link').fadeIn();
	});

	$('.side_tab_lank_box_dt').click(function(){
		$('.side_tab_link_lank').fadeIn();
	});


	$('.side_tab_store_box_dt').click(function(){
		$('.side_tab_link_store').fadeIn();
	});


	$('.side_tab_myinfo_box_dt').click(function(){
		$('.side_tab_link_myinfo').fadeIn();
	});

	// ============== side tab 1 ==============
	$('dl.side_tab_box dd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('dl.side_tab_box dd').removeClass('current');
		$('.side_tab_content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_link').hide();
	});

	// ============== side tab 2 ==============
	$('dl.side_tab_lank_box dd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('dl.side_tab_lank_box dd').removeClass('current');
		$('.side_tab_content_lank').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_link_lank').hide();
	});

	// ============== side tab 3 ==============
	$('dl.side_tab_store_box dd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('dl.side_tab_store_box dd').removeClass('current');
		$('.side_tab_content_store').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_link_store').hide();
	});


	// ============== side tab 4 ==============
	$('dl.side_tab_myinfo_box dd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('dl.side_tab_myinfo_box dd').removeClass('current');
		$('.side_tab_content_myinfo').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.side_tab_link_myinfo').hide();
	});

});
