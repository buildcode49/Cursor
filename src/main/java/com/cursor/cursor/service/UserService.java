package com.cursor.cursor.service;

import com.cursor.cursor.mapper.UserMapper;
import com.cursor.cursor.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class UserService {
    private UserMapper userMapper;

    public UserService(UserMapper _userMapper){this.userMapper = _userMapper;}

    public void addUser(User user, HttpServletRequest request) {
        System.out.println("---------service-----------");
        // 사용자가 입력한 id, pw 값
        String id = request.getParameter("userID");
        String nickname = request.getParameter("userNickname");
        //닉네임을 입력하지 않았다면 id로 대체
        if(nickname.equals("")) nickname = id;
        String pw = request.getParameter("userPW");
        String pwChk = request.getParameter("userPWCheck");
        String name = request.getParameter("userName");
        String email = request.getParameter("email");
        String birth = request.getParameter("birth");
        // 받아온 gender 값이 0이면 남자 1이면 여자
        String gender = request.getParameter("gender");
//        String gender = request.getParameter("gender").equals("0") ? "남자" : "여자";
        String category = request.getParameter("arrayCategory");
        // 선택된 관심 카테고리가 없다면 전체 추가
        if(category.equals("")){
            for(int i=0; i<12; i++){
                category += i;
                if(i < 11){
                    category += ",";
                }
            }
        }
        String agree = request.getParameter("arrayAgree");
        System.out.println("--------id : " + id +
                " / nickname : " + nickname +
                " / pw : " + pw +
                " / pwChk : " + pwChk +
                " / name : " + name +
                " / email : " + email +
                " / birth : " + birth +
                " / gender : " + gender +
                " / category : " + category +
                " / agree : " + agree +
                "-------");
        user.setId(id);
        user.setName(name);
        user.setEmail(email);
        user.setNickname(nickname);
        user.setPassword(pw);
        user.setBirthday(birth);
        user.setSex(gender);
        user.setCategory_id(category);
        user.setAgree(agree);
        System.out.println("-------------------");
        System.out.println(user);

        this.userMapper.addUser(user);
    }
}
