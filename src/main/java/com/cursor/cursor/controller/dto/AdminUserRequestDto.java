package com.cursor.cursor.controller.dto;

import com.cursor.cursor.vo.AdminUser;
import com.cursor.cursor.vo.User;
import lombok.Setter;

import java.util.Date;

@Setter
public class AdminUserRequestDto {
    Integer user_num;
    String id;
    String name;
    String email;
    String joindate;
    Integer createcount;
    Integer commentcount;
    Integer votecount;

    public AdminUser getUser() {
        return new AdminUser(this.user_num, this.id, this.name, this.email, this.joindate, this.createcount, this.commentcount, this.votecount);
    }
}