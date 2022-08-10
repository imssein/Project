package com.project.vegan.global.jwt.exception;

import io.jsonwebtoken.JwtException;

public class TokenHasExpiredException extends JwtException {
    public TokenHasExpiredException(){
        super("토큰이 만료되었습니다.");
    }
}
