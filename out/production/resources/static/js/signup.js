// 회원가입 체크
// function regExpTest(regExp, str, alert_txt){

// }
function signUpFormCheck(form){

    //아이디
    var regExp1 = /^[a-z][a-z\d]{4,19}$/; // 영소문자로 이루어 졌는지
    var regExp2 = /[0-9]/; // 하나이상의 숫자가 들어갔는지
    // 아이디가 입력되지 않은 경우
    if(form.userID.value == ""){
        alert("아이디를 입력해 주세요");
        form.userID.focus();
        $(form.userID).addClass('error');

        return;
    }


    if(!regExp1.test(form.userID.value) || !regExp2.test(form.userID.value)){
        alert("아이디는 5-20자 이내의 영소문자, 숫자로 입력해주세요.");
        $(form.userID).addClass('error');
        form.userID.focus();

        $(form.userID).on('keyup', function(){
            // 4글자 이상이면 error 효과 없애기.
            if(form.userID.value.length >= 4){
                $(form.userID).removeClass('error');
            }

        })
        return;
    }
    //비밀번호
    var regExpArr = [/^.{8,19}$/, /\d/, /[a-z]/, /[A-Z]/]; // 영어 대소문자, 숫자 포함했는지

    // 비밀번호가 입력되지 않은 경우
    if(form.userPW.value == ""){
        alert("비밀번호를 입력해 주세요");
        form.userPW.focus();
        $(form.userPW).addClass('error');

        // 비밀번호가 입력되는 것 감지.
        $(form.userPW).on('keyup', function(){
            $(form.userPW).removeClass('error');

        })
        return;
    }

    for(let i=0; i<regExpArr.length; i++){
        if(!regExpArr[i].test(form.userPW.value)){
            alert("비밀번호는 8-20자 이내의 영대소문자, 숫자로 입력해주세요.");
            return;
        }
    }

    // 비밀번호 확인이 입력되지 않은 경우
    if(form.userPWCheck.value == ""){
        alert("비밀번호 확인을 입력해 주세요");
        form.userPWCheck.focus();
        $(form.userPWCheck).addClass('error');

        // 비밀번호가 입력되는 것 감지.
        $(form.userPWCheck).on('keyup', function(){
            $(form.userPWCheck).removeClass('error');

        })
        return;
    }

    // 입력한 두 비밀번호가 다를 때
    if(form.userPW.value != form.userPWCheck.value){
        alert("입력하신 비밀번호와 일치하지 않습니다.");
        form.chgpw_check.focus();
    }

    // 이름이 입력되지 않은 경우
    if(form.userName.value == ""){
        alert("이름을 입력해 주세요");
        form.userName.focus();
        $(form.userName).addClass('error');

        // 이름이 입력되는 것 감지.
        $(form.userName).on('keyup', function(){
            $(form.userName).removeClass('error');

        })
        return;
    }

    // 이메일이 입력되지 않는 경우
    if(form.userEmail.value == ""){
        alert("이메일을 입력해 주세요");
        form.userEmail.focus();
        $(form.userEmail).addClass('error');

        // 이메일 입력되는 것 감지.
        $(form.userEmail).on('keyup', function(){
            $(form.userEmail).removeClass('error');
        })

        return;
    }


    // 약관 동의가 되지 않은 경우
    if(!$('#agree1').is(':checked')){
        alert("약관에 동의해주세요");
        return;
    }
    // 카테고리 배열로 만들기
    var arr = new Array();
    $("input:checkbox[name=category]:checked").each(function (){
        arr.push(this.value);
    })
    $("#arrayCategory").val(arr);

    var arr2 = new Array();
    $("input:checkbox[name=agree]:checked").each(function (){
        arr2.push(this.value);
    })
    $("#arrayAgree").val(arr2);

    form.submit();
}

function email(){
    // 이메일 합치기
    const email = $("#userEmail").val();
    const address = $("#userEmailAddress").val();
    if(email != "" && address != ""){
        $("#totalEmail").attr("value", email+"@"+address);
    }
}
function birth(){
    // 생일 합치기
    const year = $("#year").val();
    const month = $("#month").val();
    const day = $("#day").val();
    if(year != "" && month != "" && day != ""){
        $("#totalBirth").attr("value", year +month +day);
    }
}
$(document).ready(function(){
    // 날짜 루프로 돌려서 select 박스 생성  1900 ~ 현재
    // 기본 날짜 오늘 날짜로 설정
    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1);
    var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());
    //년도 selectbox만들기
    for(var i = 1900 ; i <= year ; i++) {
        $('#year').append('<option value="' + i + '">' + i + '</option>');
    }
    // 월별 selectbox 만들기
    for(var i=1; i <= 12; i++) {
        var mm = i > 9 ? i : "0"+i ;
        $('#month').append('<option value="' + mm + '">' + mm + '</option>');
    }
    // 일별 selectbox 만들기
    for(var i=1; i <= 31; i++) {
        var dd = i > 9 ? i : "0"+i ;
        $('#day').append('<option value="' + dd + '">' + dd+ '</option>');
    }
    $("#year  > option[value="+year+"]").attr("selected", "true");
    $("#month  > option[value="+mon+"]").attr("selected", "true");
    $("#day  > option[value="+day+"]").attr("selected", "true");


    //이메일 합쳐서 넘기기
    $("#userEmail").blur(function (){
        email();
    })
    $("#mail_select").change(function (){
        $("#userEmailAddress").attr("value", $("#mail_select").val());
        email();
    });
    $("#userEmailAddress").blur(function (){
        email();
    })
    //날짜 합쳐서 넘기기
    $("#year").change(function (){
        birth();
    })
    $("#month").change(function (){
        birth();
    })
    $("#day").change(function (){
        birth();
    })

    // 약관동의
    let agreeChkAll = $("input[name=agree_all]");
    let agreeChk = $("input[name=agree]");

    // 전체 동의 클릭 시 하위 체크 박스 true
    agreeChkAll.click(function(){
        let checked = agreeChkAll.is(":checked");
        if(checked){
            agreeChk.prop('checked', true);
        }
    })
    // 하위 체크 박스 해제 시 전체 동의 false
    agreeChk.click(function(){
        let checked = agreeChk.is(":checked");
        if(checked){
            agreeChkAll.prop('checked', false);
        }
    })

})