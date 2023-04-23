package com.cursor.cursor.controller.dto;

import com.cursor.cursor.vo.AdminUser;
import lombok.Getter;

import java.util.Date;

@Getter
public class AdminUserResponseDto {
    Integer user_num;
    String id;
    String name;
    String email;
    String joindate;
    Integer createcount;
    Integer commentcount;
    Integer votecount;

    public AdminUserResponseDto(AdminUser adminUser) {
        this.user_num = adminUser.getUser_num();
        this.id = adminUser.getId();
        this.name = adminUser.getName();
        this.email = adminUser.getEmail();
        this.joindate = adminUser.getJoindate();
        this.createcount = adminUser.getCreatecount();
        this.commentcount = adminUser.getCommentcount();
        this.votecount = adminUser.getVotecount();
    }
}
