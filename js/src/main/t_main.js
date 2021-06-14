// t_main.js

var windowW = window.innerWidth;

var storeM = $('.store_modal');
var storeExit = $('.store_exit');

(function($){

	$('.mob_info').click(function(e){
		e.preventDefault();

		$('.mob_infoBox').toggle();
	})

	/* ================================ store_modal ================================ */

	$('.store_credit').click(function(e){
		e.preventDefault();

		$('.store_modal_content').hide();
		$('.store_modal_credit').show();
	});

	storeExit.click(function(e){
		e.preventDefault();

		$('.store_modal_credit').fadeOut();
		storeM.fadeOut();

		$('.store_modal_content').fadeIn();
	});

	$('.store_content_1').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "100만 거래가능 베이직";
		document.getElementById("store_modal_ex").innerHTML = "100만 거래가능 베이직에 대한 설명글입니다.";
		storeM.fadeIn();

	});

	$('.store_content_2').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "300만 거래가능 프로";
		document.getElementById("store_modal_ex").innerHTML = "300만 거래가능 프로에 대한 설명글입니다.";
		storeM.fadeIn();
	});

	$('.store_content_3').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "500만 거래가능 프리미엄";
		document.getElementById("store_modal_ex").innerHTML = "500만 거래가능 프리미엄에 대한 설명글입니다.";
		storeM.fadeIn();
	});

	$('.store_content_4').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "1000만 거래가능 빅핸드";
		document.getElementById("store_modal_ex").innerHTML = "1000만 거래가능 빅핸드에 대한 설명글입니다.";
		storeM.fadeIn();
	});

	$('.store_content_5').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "30일 Free Ip";
		document.getElementById("store_modal_ex").innerHTML = "30일 Free Ip에 대한 설명글입니다.";
		storeM.fadeIn();
	});

	$('.store_content_6').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "30일 고정 IP+1";
		document.getElementById("store_modal_ex").innerHTML = "30일 고정 IP+1에 대한 설명글입니다.";
		storeM.fadeIn();
	});

	$('.store_content_7').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "30일 휴대폰거래 베이직";
		document.getElementById("store_modal_ex").innerHTML = "30일 휴대폰거래에 대한 설명글입니다.";
		storeM.fadeIn();
	});

	$('.store_content_8').click(function(e){
		e.preventDefault();

		document.getElementById("store_modal_title").innerHTML = "우선매칭권";
		document.getElementById("store_modal_ex").innerHTML = "우선매칭권에 대한 설명글입니다.";
		storeM.fadeIn();
	});


	/* =========================== 내 정보 - 기본등록정보 - 수정 =========================== */
	$('.profile_modify').click(function(e){	
		e.preventDefault();

		$('.profile').hide();
		$('.profile_btn').hide();
		$('.profile_modify_box').show();
	});

	$('.profile_modify_no').click(function(e){
		e.preventDefault();

		$('.profile_modify_box').hide();
		$('.profile').show();
		$('.profile_btn').show();
	})

	/* =========================== aside hide/show =========================== */
	// aside#infoBox 마우스 올릴 시 설명표시 slide
  var infoBox = $('#infoBox');
  var infoBoxExplain = $('.info_ex');

  infoBox.on('mouseover',function(e){
    e.preventDefault();
    infoBoxExplain.show("slide", { direction: "right" });
  });

  infoBox.on('mouseleave',function(e){
    e.preventDefault();

    infoBoxExplain.hide("slide", { direction: "right" }, 300);
  });

})(jQuery);


function myFunction() {
  window.open("../certi/t_certi.html", "", "left=0, top=0, toolbar=no, location=no,\
  directories=no, status=no, menubar=no, scrollbars=no\
  resizable=yes, width=375, height=700");
}