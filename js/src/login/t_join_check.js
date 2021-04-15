// t_join_check.js

(function($){

	var userId = $('#userId');
	userId.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		var ck  = /^([a-z0-9]|[-_]){5,20}$/i; 
		var relTest = ck.test( rel );
		var dl  =  $(this).parents('dl');
		var conT   = $('.confirm_text');

		if(rel == ""){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('가입 후 본인인증이 필요한 이메일만 가능합니다.');
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

	/*
	$('#selectEmail').change(function(){
		 $("#selectEmail option:selected").each(function () {
				if($(this).val()== '1'){ //직접입력일 경우
					$("#str_email02").val(''); //값 초기화
					$("#str_email02").attr("disabled",false); //활성화
				}else{ //직접입력이 아닐경우
					$("#str_email02").val($(this).text()); //선택값 입력
					$("#str_email02").attr("disabled",true); //비활성화
				}
			 }); 
			});
	*/

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

	$('[type="submit"]').on('click', function(e){
		e.preventDefault();
	
		location = './t_login.html';

	});

	// 회원가입 후 페이지 이동 -----------------------------------------------

})(jQuery);