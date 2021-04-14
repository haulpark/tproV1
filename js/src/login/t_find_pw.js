//t_find_pw.js
//--비밀번호 찾기----------------------------------
$(function(){

  $(document).ready(function () {

    init();

    $('#memberName').on("keyup", function () {
        hideInValidMsg('searchValidMemberName');
        if(!$("#searchPwBtn").prop('disabled')) {
            $("#searchPwBtn").prop('disabled', true);
        }
    });

    $('#phoneNumber').on("keyup", function () {
        if ($(this).val().length < 1) {
            $("#searchValidPhone").show();
            $("#searchValidPhone").text('휴대전화 번호를 확인해 주세요');
            $("#searchPwBtn").prop("disabled", true);
        } else if (phoneValidation()) {
            $("#searchValidPhone").hide();
        } else {
            $("#searchValidPhone").show();
            $("#searchValidPhone").text('전화번호 형식이 올바르지 않습니다');
            $("#searchPwBtn").prop("disabled", true);
        }

        if(!$("#searchPwBtn").prop('disabled')) {
            $("#searchPwBtn").prop('disabled', true);
        }
    });

    $('#sendCertPhoneBtn, #reSendCertPhoneBtn').on("click", function () {

        if (!$('#pwmemberId').val()) {
            showInValidMsg('pwsearchValidMemberId', '아이디를 입력해주세요');
            return false;
        }

        if (!$('#pwmemberName').val()) {
            showInValidMsg('pwsearchValidMemberName', '이름을 입력해 주세요');
            return false;
        }

        if (!$('#pwphoneNumber').val()) {
            showInValidMsg('pwsearchValidPhone', '휴대전화 번호를 확인해 주세요');
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
                        "memberName": $('#pwmemberName').val(),
                        "phoneNumber": $('#pwphoneNumber').val()
                    },
                    success: function (response) {
                        var success = response.success;

                        if (success) {
                            $("#pwsendCertPhoneBtn").css('display', 'none');
                            $("#pwreSendCertPhoneBtn").css('display', 'block');
                            $("#pwphoneCertification").css('display', 'block');
                        } else {
                            $("#pwsendCertPhoneBtn").css('display', 'block');
                            $("#pwreSendCertPhoneBtn").css('display', 'none');
                            $("#pwphoneCertification").css('display', 'none');
                        }
                        alert(response.message);
                    }
                }
                , true
            );
        }, 300);
    });

    $('#authSmsBtn').on("click", function () {

        if (!$('#pwmemberName').val()) {
            alert('이름을 입력해 주세요.');
            return false;
        }

        if (!$('#pwphoneNumber').val()) {
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
                            $("#searchpwBtn").prop("disabled", false);
                            $("#search_pw_list").text('');

                            $("#searchValidCertNumber").hide();
                            $("#searchValidCertNumber").text('');
                        } else {
                            $("input[name='checkSmsCertification']").val('0');
                            $("#searchpwBtn").prop("disabled", true);
                            $("#search_id_list").text('');
                        }
                    }
                }, true
            )
        }, 300);
    });

    $('#searchpwBtn').click(function() {
        var referer = $("#referer").val();

        if ($('#phoneRadioBtn').prop('checked')) {
            $("#requestMemberName").val($("#pwmemberName").val());
            $("#requestPhoneNumber").val($("#pwphoneNumber").val());
            moveSearchResult('phone');
        }
    });
});

var changeFndTarget = function(t){
    switch(t){
        case 'phone':
            $('#email').val('');
            $("#email").hide();
            $("#selfCertMessage").hide();
            $(".tel-area").show();
            $("#searchIdBtn").prop("disabled", true);
            $("#pwsendCertPhoneBtn").show();
            $("#pwreSendCertPhoneBtn").hide();
            break;
        case 'selfCert':
            $('#pwmemberName, #pwphoneNumber, #pwcertNumber').val('');
            $(".tel-area").hide();
            $(".tel-cert-area").hide();
            $('#email').val('');
            $("#email").hide();
            $("#selfCertMessage").show();
            $("#searchpwBtn").prop("disabled", false);
            break;
    }
    $("#searchValidPhone").hide();
    $(".n-validation").text('');
}

function phoneValidation() {
    var phoneNumber = $('#pwphoneNumber').val();
    if (!(phoneNumber.length >= 10 && phoneNumber.length <= 11)) {
        return false;
    }
    var regNumber = /^(01[016789])(\d{3,4})(\d{4})/;
    if(!regNumber.test(phoneNumber)){
        $("#pwphoneNumber").val(phoneNumber.replace(/[^0-9]/g,""));
        $("#pwphoneNumber").focus();
        return false;
    }
    return true;
}

});