package com.cursor.cursor.controller;

import com.cursor.cursor.controller.dto.AdminUserResponseDto;
import com.cursor.cursor.service.AdminUserService;
import com.cursor.cursor.vo.AdminUser;
import com.cursor.cursor.vo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class AdminUserController {
    private AdminUserService adminUserService;

    public AdminUserController(AdminUserService adminUserService) {
        this.adminUserService = adminUserService;
    }

//    @GetMapping(value = "/admin/users")
//    public ModelAndView goAdmin(Model model) {
//        ModelAndView mav = new ModelAndView();
//
//        List<AdminUser> userList = adminUserService.getUser();
//
//        mav.addObject("userList", userList);
//        mav.setViewName("admin_user");
//
//        return mav;
//    }

    @GetMapping("/admin")
    public String adminMain(){
        return "admin";
    }

    @GetMapping("/admin/users")
    public String adminUserList(Model model, String keyword){
        //전체 투표글 정보 관리 페이지
        List<AdminUser> userList = null;

        //검색하지 않은 경우
        if(keyword == null){
            userList = adminUserService.getUser();
        }
        //검색한 경우
        else{
            userList = adminUserService.findByKeyword(keyword);
        }

        model.addAttribute("userList", userList);
        return "admin_user";
    }

    @ResponseBody
    @PostMapping(value = "/user/delete")
    public List<Integer> adminUserDelete(@RequestBody List<Integer> idx_user_numArr){
        adminUserService.deleteUser(idx_user_numArr);
        return idx_user_numArr;
    }

    @RequestMapping("/admin/message")
    public String adminUser(Model model){
        return "admin_user";
    }

}
