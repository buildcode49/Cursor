

// 이메일 정규 표현식
let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// 로그인 체크
function loginFormCheck(form){
    // 아이디가 입력되지 않은 경우
    if(form.userID.value == ""){
        alert("아이디를 입력해 주세요");
        form.userID.focus();
        $(form.userID).addClass('error');
        $(form.userID).siblings(".error").show();

        // 아이디가 입력되는 것 감지.
        $(form.userID).on('keyup', function(){
            // 4글자 이상이면 error 효과 없애기.
            if(form.userID.value.length >= 4){
                $(form.userID).removeClass('error');
                $(form.userID).siblings(".error").hide();
            }

        })
        return;
    }
    // 비밀번호가 입력되지 않은 경우
    if(form.userPW.value == ""){
        alert("비밀번호를 입력해 주세요");
        form.userPW.focus();
        $(form.userPW).addClass('error');
        $(form.userPW).siblings(".error").show();

        // 비밀번호가 입력되는 것 감지.
        $(form.userPW).on('keyup', function(){
            $(form.userPW).removeClass('error');
            $(form.userPW).siblings(".error").hide();

        })
    }

    form.submit();
}

// 아이디 찾기 체크
function findIDCheck(form){
    // 이름 입력되지 않은 경우
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

    // 이메일 입력되지 않은 경우
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

    // 이메일 형식에 맞는지 확인
    let isVaild=regExp.test(form.userEmail.value);
    if(!isVaild){
        alert("유효하지 않은 이메일입니다.");
        return;
    }

    //=> 아이디 찾은 결과로 넘어가기
}

// 비밀번호 찾기 체크
function findPWCheck(form){
    // 아이디가 입력되지 않은 경우
    if(form.userID.value == ""){
        alert("아이디를 입력해 주세요");
        form.userID.focus();
        $(form.userID).addClass('error');
        $(form.userID).siblings(".error").show();

        // 아이디가 입력되는 것 감지.
        $(form.userID).on('keyup', function(){
            // 4글자 이상이면 error 효과 없애기.
            if(form.userID.value.length >= 4){
                $(form.userID).removeClass('error');
                $(form.userID).siblings(".error").hide();
            }

        })
        return;
    }
    // 이메일 입력되지 않은 경우
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

    // 이메일 형식에 맞는지 확인
    let isVaild=regExp.test(form.userEmail.value);
    if(!isVaild){
        alert("유효하지 않은 이메일입니다.");
        return;
    }

    // 인증번호 입력되지 않은 경우
    if(form.emailCertification.value == ""){
        alert("인증번호를 입력해주세요");
    }
}

// 새 비밀번호 설정 체크
function chgPWCheck(form){
    if(form.chgpw.value == ""){
        alert("새 비밀번호를 입력해주세요");
        form.chgpw.focus();
        $(form.chgpw).addClass('error');
        $(form.chgpw).on('keyup', function(){
            $(form.chgpw).removeClass('error');
        })

        return;
    }
    // 새로운 비밀번호가 형식에 맞지 않을 경우
    var regExpArr = [/^.{8,19}$/, /\d/, /[a-z]/, /[A-Z]/]; // 영어 대소문자, 숫자 포함했는지
    for(let i=0; i<regExpArr.length; i++){
        if(!regExpArr[i].test(form.chgpw.value)){
            alert("비밀번호는 8-20자 이내의 영대소문자, 숫자로 입력해주세요.");
            form.chgpw.focus();
            return;
        }
    }
    if(form.chgpw_check.value == ""){
        alert("새 비밀번호 확인을 입력해주세요");
        form.chgpw_check.focus();
        $(form.chgpw_check).addClass('error');
        $(form.chgpw_check).on('keyup', function(){
            $(form.chgpw_check).removeClass('error');
        })
        return;
    }



    // 두가지가 일치하지 않을 경우
    if(form.chgpw.value != form.chgpw_check.value){
        alert("입력하신 비밀번호가 변경할 비밀번호와 일치하지 않습니다.");
        form.chgpw_check.focus();
    }

    // =>둘다 입력 되었고, 같으니 서버로 전송
    if(form.chgpw.value == form.chgpw_check.value){
        alert("비밀번호가 변경되었습니다");
        $(".find_form").hide();
        $(".modal").hide();
    }

}
$(document).ready(function(){

    $(".find_id").click(function(){
        $(".modal").show();
        $(".find_id_form").show();
    })
    $(".find_pw").click(function(){
        $(".modal").show();
        $(".find_pw_form").show();
    })

    $(".close_btn").click(function(){
        $(".modal").hide();
        $(".modal .find_form").hide();
    })
    $(".find_id_form input[type=submit]").click(function(){
        $(".find_id_form").hide();
        $(".find_id_res_form").show();
    })

    // 찾은 id 마스킹 처리
    var id = $(".id_res");
    var hideid = id.html().replace(/(?<=.{1})./gi, "*");
    id.text(hideid);

    $(".find_id_res_form input[type=button]").click(function(){

        $(".modal").hide();
        $(".find_id_res_form").hide();
    })


    // 아이디 기억하기 : 쿠키
    //1. 저장된 쿠키 값을 가져와서 ID 칸에 넣어줌. 없으면 공백
    var key = getCookie("key");
    $(".userID").val(key);
    //2. 그 전에 ID를 저장해서 처음 페이지 로딩시, 입력 칸에 저장된 ID가 표시된 상태라면
    //   ID 저장하기를 체크 상태로 두기
    if($(".userID").val()!= ""){
        $("#remember_check").attr("checked", true);
    }
    //3. 체크박스에 변화가 있다면 ID 저장하기 체크 시, 7일동안 쿠키 보관.
    $("#remember_check").change(function(){
        if($("#remember_check").is(":checked")){
            setCookie("key", $(".userID").val(), 7);
        } else{ // 해제시 삭제
            deleteCookie("key");
        }
    })

    //4. ID 저장하기를 체크한 상태에서 ID를 입력하는 경우 쿠키 저장
    $(".userID").keyup(function(){
        if($("#remember_check").is(":checked")){
            setCookie("key", $(".userID").val(), 7);
        }
    })

    //쿠키 저장
    function setCookie(cookieName, value, exdays){
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var cookieValue = escape(value) +  ((exdays == null) ?  "" : "; expires=" +  exdate.toGMTString());
        document.cookie = cookieName + "=" + cookieValue;
    }

    // 쿠키 삭제
    function deleteCookie(cookieName) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() - 1);
        document.cookie = cookieName + "= " + "; expires="
            + expireDate.toGMTString();
    }
    // 쿠키 가져오기
    function getCookie(cookieName) {
        cookieName = cookieName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cookieName);
        var cookieValue = '';
        if (start != -1) { // 쿠키가 존재하면
            start += cookieName.length;
            var end = cookieData.indexOf(';', start);
            if (end == -1) // 쿠키 값의 마지막 위치 인덱스 번호 설정
                end = cookieData.length;
            console.log("end위치  : " + end);
            cookieValue = cookieData.substring(start, end);
        }
        return unescape(cookieValue);
    }

})