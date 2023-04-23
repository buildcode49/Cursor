package com.cursor.cursor.mapper;

import com.cursor.cursor.vo.AdminUser;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Mapper
public interface AdminUserMapper {
    List<AdminUser> getUser();

    /* 키워드로 투표 불러오기 */
    List<AdminUser> findByKeyword(@PathVariable("keyword") String keyword);

    /* 선택한 투표글 삭제 */
    int deleteUser(int idx_user_num);
}
