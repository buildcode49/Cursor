//const ckAll = document.querySelector(".ck-all");
//
//const ckArr = document.querySelectorAll(".ck");
//
////일괄 체크박스 선택/해제
//ckAll.addEventListener("click", ()=>{
//   ckArr.forEach(ck => {
//      ck.checked = ckAll.checked;
//   })
//})
//
//// 항목별 체크박스 선택에 따라 일괄 체크박스 선택 여부 결정
//ckArr.forEach(ck => {
//   ck.addEventListener("click", () => {
//      let cnt = 0;
//
//      ckArr.forEach(ck => {
//         if(ck.checked === true){
//            cnt++;
//         }
//      })
//
//      ckAll.checked = (cnt === ckArr.length);
//   })
//});

//체크박스 전체 선택 클릭 이벤트
    function allChecked(target){

        //전체 체크박스 버튼
        const checkbox = document.getElementById('allCheckBox');

        //전체 체크박스 버튼 체크 여부
        const is_checked = checkbox.checked;

        //전체 체크박스 제외한 모든 체크박스
        if(is_checked){
            //체크박스 전체 체크
            chkAllChecked()
        }

        else{
            //체크박스 전체 해제
            chkAllUnChecked()
        }
    }

    //자식 체크박스 클릭 이벤트
    function chkClicked(){

        //체크박스 전체개수
        const allCount = document.querySelectorAll(".chk").length;

        //체크된 체크박스 전체개수
        const query = 'input[name="chk"]:checked'
        const selectedElements = document.querySelectorAll(query)
        const selectedElementsCnt = selectedElements.length;

        //체크박스 전체개수와 체크된 체크박스 전체개수가 같으면 전체 체크박스 체크
        if(allCount == selectedElementsCnt){
             document.getElementById('allCheckBox').checked = true;
        }

        //같지않으면 전체 체크박스 해제
        else{
            document.getElementById('allCheckBox').checked = false;
        }
    }

    //체크박스 전체 체크
    function chkAllChecked(){
        document.querySelectorAll(".chk").forEach(function(v, i) {
            v.checked = true;
        });
    }

    //체크박스 전체 체크 해제
    function chkAllUnChecked(){
        document.querySelectorAll(".chk").forEach(function(v, i) {
            v.checked = false;
        });
    }

//document.getElementById("delete_btn").addEventListener('click', adminUserDelete);

//사용자 삭제하기
function userDelete(){
   var rowData = new Array();
   var tdArr = new Array();
   var checkbox = $("input[name=delCheck]:checked");

   // 체크된 체크박스 값을 가져온다
   checkbox.each(function(i) {

      // checkbox.parent() : checkbox의 부모는 <td>이다.
      // checkbox.parent().parent() : <td>의 부모이므로 <tr>이다.
      var tr = checkbox.parent().parent().eq(i);
      var td = tr.children();

      // 체크된 row의 모든 값을 배열에 담는다.
      rowData.push(tr.text());

      // td.eq(0)은 체크박스 이므로  td.eq(1)의 값 가져온다.
      var no = td.eq(1).text();

      // 가져온 값을 배열에 담는다.
      tdArr.push(no);

   });

   var user_numArray = [];


   console.log(tdArr);

   if(tdArr == ""){
      alert("해당 사용자가 탈퇴되었습니다.");
      return false;
   }

   var confirmAlert = confirm('해당 사용자를 탈퇴 처리 하시겠습니까?');

   if(confirmAlert){
      $.ajax({
         type : 'POST'
         ,url : '/user/delete'
         ,dataType : 'json'
         ,data : JSON.stringify(tdArr)
         ,contentType: 'application/json'
         ,success : function(result) {
            alert("해당 사용자가 탈퇴되었습니다.");
            location.href="/admin/users";
         },
         error: function(request, status, error) {
         }
      })
   }
}