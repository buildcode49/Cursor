package com.cursor.cursor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {
    private SessionManager sessionManager;

    @GetMapping("/login")
    public String loginPage(){
        return "login";
    }
    @PostMapping("/login")
    public String loginPage(HttpServletRequest request, Model model) {

        // 사용자가 입력한 id, pw 값
        String id = request.getParameter("userID");
        String pw = request.getParameter("userPW");
        System.out.println("--------id : " + id + " / pw : " + pw + "-------");

        // * 가져온 id, pw 값을 db와 비교
        // 1. 관리자
        // 2. 일반 회원 로그인
        // 3. 일반 회원 로그인 실패
        if(id.equals("asdf1234") && pw.equals("Asdf1234")){
            model.addAttribute("user", id);
            return "main";
        }
//        Member loginMember = login
//        sessionManager.createSession(loginMember, response);
        return "login";

    }
}
