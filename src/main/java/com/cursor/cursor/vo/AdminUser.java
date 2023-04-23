package com.cursor.cursor.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminUser {
    Integer user_num;
    String id;
    String name;
    String email;
    String nickname;
    String password;
    String birthday;
    String sex;
    String category_id;
    String agree;
    String joindate;
    String img;
    Integer createcount;
    Integer commentcount;
    Integer votecount;

    public AdminUser(Integer user_num, String id, String name, String email, String joindate, Integer createcount, Integer commentcount, Integer votecount) {
        this.user_num = user_num;
        this.id = id;
        this.name = name;
        this.email = email;
        this.joindate = joindate;
        this.createcount = createcount;
        this.commentcount = commentcount;
        this.votecount = votecount;
    }

    public Integer getUser_num() {
        return user_num;
    }
    public void setUser_num(Integer user_num) {
        this.user_num = user_num;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getJoindate() {
        return joindate;
    }
    public void setJoindate(String joindate) {
        this.joindate = joindate;
    }

    public Integer getCreatecount() {
        return createcount;
    }
    public void setCreatecount(Integer createcount) {
        this.createcount = createcount;
    }

    public Integer getCommentcount() {
        return commentcount;
    }
    public void setCommentcount(Integer commentcount) {
        this.commentcount = commentcount;
    }

    public Integer getVotecount() {
        return votecount;
    }
    public void setVotecount(Integer votecount) {
        this.votecount = votecount;
    }

    public String getNickname() {
        return nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getBirthday() {
        return birthday;
    }
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCategory_id() {
        return category_id;
    }
    public void setCategory_id(String category_id) {
        this.category_id = category_id;
    }

    public String getAgree() {
        return agree;
    }
    public void setAgree(String agree) {
        this.agree = agree;
    }

    public String getImg() {
        return img;
    }
    public void setImg(String img) {
        this.img = img;
    }
}
