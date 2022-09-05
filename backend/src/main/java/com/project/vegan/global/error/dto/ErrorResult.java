package com.project.vegan.global.error.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorResult<T> {
    private String statusCode;
    private String message;
    private T errors;

    public ErrorResult(String statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
