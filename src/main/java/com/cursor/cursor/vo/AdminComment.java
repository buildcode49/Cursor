package com.cursor.cursor.vo;

import org.w3c.dom.Text;

import java.util.Date;

public class AdminComment {
    Integer chat_id;
    String id;
    String cousel_id;
    Text content;
    Date date;

    public AdminComment(Integer chat_id, String id, String cousel_id, Text content, Date date) {
        this.chat_id = chat_id;
        this.id = id;
        this.cousel_id = cousel_id;
        this.content = content;
        this.date = date;
    }

    public AdminComment() {

    }

    public Integer getChat_id() {
        return chat_id;
    }

    public void setChat_id(Integer chat_id) {
        this.chat_id = chat_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCousel_id() {
        return cousel_id;
    }

    public void setCousel_id(String cousel_id) {
        this.cousel_id = cousel_id;
    }

    public Text getContent() {
        return content;
    }

    public void setContent(Text content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
