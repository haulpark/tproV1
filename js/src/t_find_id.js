//t_find_id.js

$(function(){

  //--tab Box 구현--------------------------------

  $('ul.tab li').click(function(){
    var activeTab = $(this).attr('data-tab');
    $('ul.tab li').removeClass('current');
    $('.tab_content').removeClass('current');
    $(this).addClass('current');
    $('#'+activeTab).addClass('current');
  })

  //--아이디 찾기----------------------------------
  $(document).ready(function () {

    init();

    $('#memberName').on("keyup", function () {
        hideInValidMsg('searchValidMemberName');
        if(!$("#searchIdBtn").prop('disabled')) {
            $("#searchIdBtn").prop('disabled', true);
        }
    });

    $('#phoneNumber').on("keyup", function () {
        if ($(this).val().length < 1) {
            $("#searchValidPhone").show();
            $("#searchValidPhone").text('휴대전화 번호를 확인해 주세요');
            $("#searchIdBtn").prop("disabled", true);
        } else if (phoneValidation()) {
            $("#searchValidPhone").hide();
        } else {
            $("#searchValidPhone").show();
            $("#searchValidPhone").text('번호 형식이 올바르지 않습니다');
            $("#searchIdBtn").prop("disabled", true);
        }

        if(!$("#searchIdBtn").prop('disabled')) {
            $("#searchIdBtn").prop('disabled', true);
        }
    });

    /*
    $('#email').on("keyup", function () {
        emailValidEventHandler();
    });

    $('#email').on("paste", function () {
        setTimeout(function () {
            emailValidEventHandler();
        }, 10);
    })
    */

    $('#sendCertPhoneBtn, #reSendCertPhoneBtn').on("click", function () {

        if (!$('#memberName').val()) {
            showInValidMsg('searchValidMemberName', '이름을 입력해 주세요');
            return false;
        }

        if (!$('#phoneNumber').val()) {
            showInValidMsg('searchValidPhone', '휴대전화 번호를 확인해 주세요');
            return false;
        }

        if (!phoneValidation()) {
            showInValidMsg('searchValidPhone', '번호 형식이 올바르지 않습니다');
            return false;
        }

        setTimeout(function(){
            mss.my.ajax.call(
                {
                    type: "POST",
                    url: "/api/member/v3/search/send/authCode/sms",
                    data: {
                        "memberName": $('#memberName').val(),
                        "phoneNumber": $('#phoneNumber').val()
                    },
                    success: function (response) {
                        var success = response.success;

                        if (success) {
                            $("#sendCertPhoneBtn").css('display', 'none');
                            $("#reSendCertPhoneBtn").css('display', 'block');
                            $("#phoneCertification").css('display', 'block');
                        } else {
                            $("#sendCertPhoneBtn").css('display', 'block');
                            $("#reSendCertPhoneBtn").css('display', 'none');
                            $("#phoneCertification").css('display', 'none');
                        }
                        alert(response.message);
                    }
                }
                , true
            );
        }, 300);
    });

    $('#authSmsBtn').on("click", function () {

        if (!$('#memberName').val()) {
            alert('이름을 입력해 주세요.');
            return false;
        }

        if (!$('#phoneNumber').val()) {
            alert('휴대전화 번호를 확인해 주세요');
            return false;
        }

        setTimeout(function () {
            mss.my.ajax.call(
                {
                    type: 'POST',
                    url: '/api/sms/v1/certification',
                    data: {
                        phoneNumber: $('#phoneNumber').val(),
                        certificationCode: $('#certNumber').val(),
                        sendType: "searchMember"
                    },
                    success: function (response) {
                        alert(response.message);
                        var success = response.success;
                        if (success) {
                            $("input[name='checkSmsCertification']").val('1');
                            $("#searchIdBtn").prop("disabled", false);
                            $("#search_id_list").text('');

                            $("#searchValidCertNumber").hide();
                            $("#searchValidCertNumber").text('');
                        } else {
                            $("input[name='checkSmsCertification']").val('0');
                            $("#searchIdBtn").prop("disabled", true);
                            $("#search_id_list").text('');
                        }
                    }
                }, true
            )
        }, 300);
    });

    $('#searchIdBtn').click(function() {
        var referer = $("#referer").val();

        if ($('#phoneRadioBtn').prop('checked')) {
            $("#requestMemberName").val($("#memberName").val());
            $("#requestPhoneNumber").val($("#phoneNumber").val());
            moveSearchResult('phone');
        }
        /*
        if ($('#emailRadioBtn').prop('checked')) {
            mss.my.ajax.call(
                {
                    async: false,
                    type: "POST",
                    url: "/api/member/v3/search/send/id/email",
                    data : {"email" : $("#email").val(), "referer" : referer},
                    success: function(response) {
                        $("#requestIsSendEmail").val(response.success);
                        moveSearchResult('email');
                    }
                }
            );
        }
        */
    });
});

function init() {
    $("#phoneRadioBtn").prop('checked', true);
    changeFndTarget($("#phoneRadioBtn").data('type'));
    $("#memberName").val('');
    $("#phoneNumber").val('');
    $("#certNumber").val('');
    /* $("#email").val(''); */
}

function moveSearchResult(searchChannelType) {
    var referer = $("#referer").val();
    var memberResultToken = getTokenMemberIds('false');
    var memberIdResultUrl = '/member/v1/search/result/id/' + searchChannelType + '?token=' + memberResultToken + '&referer=' + referer;
    location.href = memberIdResultUrl;
}

function showInValidMsg(target, msg) {
    $("#" + target).text(msg).show();
}

function hideInValidMsg(target) {
    $("#" + target).text('').hide();
}

/*
function emailValidEventHandler() {
    if (emailValidation()) {
        $("#searchValidEmail").hide();
        $("#searchIdBtn").prop("disabled", false);
    } else {
        $("#searchValidEmail").show();
        $("#searchValidEmail").text('이메일주소를 다시 확인해 주세요');
        $("#searchIdBtn").prop("disabled", true);
    }
}
*/


function getTokenMemberIds() {
    var token = '';
    mss.my.ajax.call(
        {
            type: "POST",
            async: false,
            url: "/api/member/v3/search/id/result/token",
            data : {
                "memberName" : $("#memberName").val(),
                "phoneNumber" : $("#phoneNumber").val(),
                "isSendEmail": $("#requestIsSendEmail").val(),
            },
            success: function(response) {
                token = response.data;
            }
        }
        ,false
    );
    return token;
}

var changeFndTarget = function(t){
    switch(t){
        case 'email':
            $(".tel-area").hide();
            $("#selfCertMessage").hide();
            $(".tel-cert-area").hide();
            $('#memberName, #phoneNumber, #certNumber').val('');
            $("#email").show();
            $("#searchIdBtn").prop("disabled", true);
            break;
        case 'phone':
            $('#email').val('');
            $("#email").hide();
            $("#selfCertMessage").hide();
            $(".tel-area").show();
            $("#searchIdBtn").prop("disabled", true);
            $("#sendCertPhoneBtn").show();
            $("#reSendCertPhoneBtn").hide();
            break;
        case 'selfCert':
            $('#memberName, #phoneNumber, #certNumber').val('');
            $(".tel-area").hide();
            $(".tel-cert-area").hide();
            $('#email').val('');
            $("#email").hide();
            $("#selfCertMessage").show();
            $("#searchIdBtn").prop("disabled", false);
            break;
    }
    $("#searchValidPhone").hide();
    $("#searchValidEmail").hide();
    $(".n-validation").text('');
}

function phoneValidation() {
    var phoneNumber = $('#phoneNumber').val();
    if (!(phoneNumber.length >= 10 && phoneNumber.length <= 11)) {
        return false;
    }
    var regNumber = /^(01[016789])(\d{3,4})(\d{4})/;
    if(!regNumber.test(phoneNumber)){
        $("#phoneNumber").val(phoneNumber.replace(/[^0-9]/g,""));
        $("#phoneNumber").focus();
        return false;
    }
    return true;
}

/*
function emailValidation() {
    var email = $('#email').val();
    var emailRegExp = new RegExp('^[_a-zA-Z0-9-\\.]+@[\\.a-zA-Z0-9-]+\\.[a-zA-Z]+$');
    if(!emailRegExp.test(email)){
        return false;
    }
    return true;
}
*/
});


//--비밀번호 찾기----------------------------------