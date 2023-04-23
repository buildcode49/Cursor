package com.cursor.cursor.vo;

public class AdminUserActivity {
    String id;
    Integer createcount;
    Integer commentcount;
    Integer votecount;

    public AdminUserActivity(String id, Integer createcount, Integer commentcount, Integer votecount) {
        this.id = id;
        this.createcount = createcount;
        this.commentcount = commentcount;
        this.votecount = votecount;
    }

    public AdminUserActivity() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
}
