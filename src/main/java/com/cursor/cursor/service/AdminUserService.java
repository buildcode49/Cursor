package com.cursor.cursor.service;

import com.cursor.cursor.mapper.AdminUserMapper;
import com.cursor.cursor.vo.AdminUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class AdminUserService {
    private AdminUserMapper adminUserMapper;

    public AdminUserService(AdminUserMapper adminUserMapper) {
        this.adminUserMapper = adminUserMapper;
    }

    public List<AdminUser> getUser() {
        return adminUserMapper.getUser();
    }

    public List<AdminUser> findByKeyword(String keyword){
        /* 투표글 제목 키워드로 투표 검색 결과 목록 */
        return adminUserMapper.findByKeyword(keyword);
    }

    public void deleteUser(List<Integer> idx_user_numArr){
        /* 투표글 삭제 */
        for(Integer i : idx_user_numArr){
            adminUserMapper.deleteUser(i.intValue());
        }
    }
}
