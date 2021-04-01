// t_join_check.js

(function($){

	var mobileArea = $('#mobileArea');
	var contry = [
		'가나 +233',
		'가봉 +241',
		'가이아나 +592',
		'감비아 +220',
		'과테말라 +502',
		'괌 +1671',
		'대한민국 +82',
		'그레나다 +1473',
		'그리스 +30',
		'기니 +224'
	];

	var contryText = '<option></option>';
	var valueResult;	

	// console.log( contry[0].split('+')[1]);
	var koreaSelect = contry.indexOf('대한민국 +82');

	for(var i=0; i < contry.length; i++ ){
		mobileArea.append(contryText);
		mobileArea.find('option').eq(i).text(contry[i]);
		valueResult = contry[i].split('+')[1];
		mobileArea.find('option').eq(i).attr({value : valueResult});
	}
	mobileArea.find('option').eq(koreaSelect).attr({selected:'selected'});

	// var date = new Date();
	// console.log(date);

	var userId = $('#userId');
	userId.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		// var ck  = /^([a-z0-9]|[-_])*([a-z0-9]|[*-_]){5,20}$/i; 

		// 영문(대/소), 숫자, 특수(-_)글자 5~20글자
		var ck  = /^([a-z0-9]|[-_]){5,20}$/i; 
		var relTest = ck.test( rel );
		var dl  =  $(this).parents('dl');
		var conT   = $(this).parents('dd').eq(0).next('.confirm_text');

		if(rel == ""){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('id는 반드시 입력해야합니다.');
		}else if( !relTest ){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
		}else{
			dl.addClass('success');
			dl.removeClass('error');
			conT.text('좋은 id입니다. 사용하셔도 좋습니다.');
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
	// console.log( relTest );
	var dl = $(this).parents('dl');
	var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

	if( !rel ){
		dl.addClass('error').removeClass('success');
		conDt.text('비밀번호는 10~20글자, 영문/숫자/특수문자(*!@#$^=-_)를 입력하세요.');
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
		conDt.text('비밀번호 내용이 동일하지 않습니다 올바르게 작성해 주세요.');
	}else{
		dl.addClass('success').removeClass('error');
		conDt.text('비밀번호가 확인되었습니다.');
	}
});

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

// --이메일, 전화번호--------------------------------------

	$('#userOtherMail').on('blur', function(){
		var thisMail = $(this).val();
		var ck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,12}$/i;
		var test = ck.test( thisMail );
	});

	$('#mobileNumber').on('blur', function(){
		var ck = /^01.{1}\d{3,4}\d{4}$/;
		var thisNum = ck.test( $(this).val()  );
		console.log( thisNum );

		$('#mobileCerti').css({display:'block', position:'absolute', width:'100%', height:'100%', top:0, left:0});

		$('#mobileCerti').attr({'placeholder':'전송된 인증번호를 입력하세요.'});
  });
  

// --가입하기--------------------------------------------
/*
$('[type="submit"]').on('click', function(e){
	e.preventDefault();

	var tsSt,tpSt, sendCk = true;
	var reqInput = [ts, tp];

	$.each(reqInput, function(data){
		if($(this).hasClass('check') === false){
			sendCk = false;
		}
	});

	// console.log(sendCk);
	if(!sendCk){

	}else{
		// 문제없이 체크시 페이지로 이동
		// 필수/선택요소 내용정의후
		var tlSt = 'termsLocation='+tl.hasClass('check') + '_&&_termsAlert=' + tp.hasClass('check');
		location = './t_login';
  }
  
  */




})(jQuery);