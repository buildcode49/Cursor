package com.cursor.cursor.mapper;

import com.cursor.cursor.vo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    Integer addUser(User user);
}
