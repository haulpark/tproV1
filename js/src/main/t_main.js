// t_main.js

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

  /*
  $('data').visualize({type:'bar'});
  $('data').visualize({type:'area', width:'400px'});
  $('data').visualize({type:'pie', pieLablPos : 'inside'});
  $('data').visualize({type:'line', lineWeight : 2});
  */
