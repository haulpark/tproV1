$(function($){

  // ========== 은행 박스 열고 닫기 ==========

  $('.accNumBtn').click(function(e){
    e.preventDefault();
    $('#bankBox').show();
  });

  $('.close').click(function(e){
    e.preventDefault();

    $('#bankBox').hide();
  });

  // ========== tab Box ==========

  $('ul.tab li').click(function(){
    var activeTab = $(this).attr('data-tab');

    $('ul.tab li').removeClass('current');
    $('.tab_content').removeClass('current');

    $(this).addClass('current');
    $('#' + activeTab).addClass('current');
  });

  // 은행/증권 dl 클릭 시 은행 선택란에 들어가기 

  $('.tab_content').find('li').click(function(e){
   
    
    $('.accNumBtn').find('span').text("신한은행");

    $('#bankBox').hide();
    

  });

  $('.next_certi_btn').click(function(e){

    $('#accNum_msg').show();
    
  });

  $('.msg_close').click(function(e){

    location.href = "./t_accNum_certi_input.html";
  });


});