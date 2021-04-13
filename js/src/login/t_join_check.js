// t_join_check.js

(function($){

	var userId = $('#userId');
	userId.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		var ck  = /^([a-z0-9]|[-_]){5,20}$/i; 
		var relTest = ck.test( rel );
		var dl  =  $(this).parents('dl');
		var conT   = $(this).parents('dd').eq(0).next('.confirm_text');

		if(rel == ""){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('사용할 수 없는 아이디입니다.');
		}else if( !relTest ){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
		}else{
			dl.addClass('success');
			dl.removeClass('error');
			conT.text('사용할 수 있는 아이디입니다.');
		}

	});

// 비밀번호 -----------------------------------------------

	var pwResult;
	var userPw = $('#userPw');

	userPw.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		pwResult = rel;

		var ck  = /^([a-z0-9]|[*!@#$^=-_]){10, 20}$/i; // (){}[]+\/ 글자는 제한
		var relTest = ck.test( rel );
		var dl = $(this).parents('dl');
		var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

		if( rel.length <= 10 || rel.length >= 20 ){
			dl.addClass('error').removeClass('success');
			conDt.text('비밀번호는 10~20글자, 영문/숫자/특수문자(*!@#$^=-_)를 혼합하여 입력해주세요.');
		}else{
			dl.addClass('success').removeClass('error');
			conDt.text('비밀번호 내용이 입력되었습니다.');
		}

	});

	var userPw2 = $('#userPw2');
	userPw2.on('blur', function(e){
		e.preventDefault();
		var rel = $(this).val();
		var dl = $(this).parents('dl');
		var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

		if(rel !== pwResult){
			dl.addClass('error').removeClass('success');
			conDt.text('비밀번호가 동일하지 않습니다.');
		}else{
			dl.addClass('success').removeClass('error');
			conDt.text('비밀번호가 일치합니다.');
		}
	});


// -- 이메일 --------------------------------------

	$('#userOtherMail').on('blur', function(){
		var thisMail = $(this).val();
		var ck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,12}$/i;
		var test = ck.test( thisMail );
	});

/*
var pwIcon = userPw.parents('dl').find('i');
pwIcon.css({cursor:'pointer'});
pwIcon.on('mouseenter', function(){
	$(this).removeClass('fa-lock');
	$(this).addClass('fa-eye');
});	

pwIcon.on('mouseleave', function(){
	$(this).removeClass('fa-eye');
	$(this).addClass('fa-lock');
});	

pwIcon.on('mousedown', function(e){
	e.preventDefault();
	// 마우스 왼버튼 확인
	if ( e.button == 0 ){
		userPw.attr({type:'text'});
	}
});

pwIcon.on('mouseup', function(e){
	e.preventDefault();
	userPw.attr({type:'password'});
});
*/

})(jQuery);