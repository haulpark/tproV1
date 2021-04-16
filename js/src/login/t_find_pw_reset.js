//t_find_pw_reset.js

(function($){
  
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

})(jQuery);