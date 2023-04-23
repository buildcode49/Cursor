package com.cursor.cursor.controller;

import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class SessionManager {

    //쿠키는 쓸 곳이 많기 때문에 상수로 생성
    public static final String SESSION_COOKIE_NAME = "mySessionId";

    //스프링 아이디와 객체를 맵으로 저장
    //동시성을 위해 ConcurrentHashMap<>() 사용
    private Map<String, Object> sessionStore = new ConcurrentHashMap<>();

    //세션생성
    public void createSession(Object value, HttpServletResponse response){
        //세션 id를 생성, 값을 세션에 저장
        //randomUUID() : 확실한 랜덤값을 얻을 수 있음. 자바 제공
        String sessionId = UUID.randomUUID().toString();
        sessionStore.put(sessionId, value);
        //쿠키 생성 후 저장
        Cookie cookie = new Cookie(SESSION_COOKIE_NAME, sessionId);
        response.addCookie(cookie);
    }
    //세션조회
    public Object getSession(HttpServletRequest request){
        //쿠키를 찾음
        Cookie cookie = findCookie(request, SESSION_COOKIE_NAME);
        if(cookie == null) return null;
        return sessionStore.get(cookie.getValue());
    }
    //세션만료
    public void expire(HttpServletRequest request){
        Cookie cookie = findCookie(request, SESSION_COOKIE_NAME);
        if(cookie != null){
            //만료된 쿠키 삭제
            sessionStore.remove(cookie.getValue());
        }
    }
    //쿠키를 찾는 로직
    public Cookie findCookie(HttpServletRequest request, String cookieName){
        if(request.getCookies() == null){
            return null;
        }
        return Arrays.stream(request.getCookies())
                .filter(c -> c.getName().equals(cookieName))
                .findAny()
                .orElse(null);
    }
}
