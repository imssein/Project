package com.project.vegan.global.jwt.exception;

public class TokenIsInvalidException extends Exception{
    public TokenIsInvalidException() {
        super("Token is invalid");
    }
}
