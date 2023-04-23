package com.cursor.cursor.controller;

import com.cursor.cursor.service.UserService;
import com.cursor.cursor.vo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;

@Controller
public class UserController {
    private UserService userService;
    public UserController(UserService _userService){this.userService = _userService;}

    @GetMapping("/signup")
    public String signUpPage(){
        return "signup";
    }
    @PostMapping("/signup")
    public String signUpPage(User user, HttpServletRequest request, Model model){
        System.out.println("---------controller-----------");
        this.userService.addUser(user, request);
        return "login";
    }


}
