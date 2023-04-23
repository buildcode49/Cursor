function removeCheck() {
    if(confirm("탈퇴 시에도 작성한 서베이/댓글은 삭제되지 않습니다.\n정말 탈퇴하시겠습니까?")==true){
            return true;
    }
    else {return false;}
}

function saveMsg() {
    alert('저장되었습니다');
    window.close();
}
