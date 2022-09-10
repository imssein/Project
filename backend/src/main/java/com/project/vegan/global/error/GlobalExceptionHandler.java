package com.project.vegan.global.error;

import com.project.vegan.domain.common.exception.FileUploadException;
import com.project.vegan.domain.member.exception.MemberDuplicateException;
import com.project.vegan.domain.member.exception.PasswordMismatchException;
import com.project.vegan.global.error.dto.ErrorResult;
import com.project.vegan.global.exception.ForbiddenException;
import com.project.vegan.global.exception.NotFoundException;
import com.project.vegan.global.jwt.exception.TokenHasExpiredException;
import com.project.vegan.global.jwt.exception.TokenIsInvalidException;
import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice("com.project.vegan.domain")
public class GlobalExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    protected ErrorResult handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        return new ErrorResult("400", "Validation Error!", e.getBindingResult());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    protected ErrorResult MethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException e){
        return new ErrorResult("400", "TypeMismatch Error!");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    protected ErrorResult handleIllegalArgumentException(IllegalArgumentException e) {
        return new ErrorResult("400", "IllegalArgument Error!");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    protected ErrorResult handlePasswordMismatchException(PasswordMismatchException e){
        return new ErrorResult("400", "PasswordMismatch Error!");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    protected ErrorResult handleMemberDuplicateException(MemberDuplicateException e){
        return new ErrorResult("400", "MemberDuplicate Error!");
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler
    protected ErrorResult handleForbiddenException(ForbiddenException e){
        return new ErrorResult("403", "Forbidden Error!");
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler
    protected ErrorResult handleTokenHasExpiredException(TokenHasExpiredException e){
        return new ErrorResult("403", "TokenHasExpired Error!");
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler
    protected ErrorResult handleTokenIsInvalidException(TokenIsInvalidException e){
        return new ErrorResult("403", "TokenIsInvalid Error!");
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler
    protected ErrorResult handleNotFoundException(NotFoundException e){
        return new ErrorResult("404", "NotFound Error!");
    }

    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ExceptionHandler
    protected ErrorResult handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e){
        return new ErrorResult("405", "HttpMethod Error!");
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected ErrorResult handleFileUploadException(FileUploadException e){
        return new ErrorResult("500", "FileUpload Error!");
    }
}
