package com.project.vegan.domain.member.exception;

import com.project.vegan.global.exception.NotFoundException;

public class MemberNotFoundException extends NotFoundException {
    public MemberNotFoundException() {
        super("회원을 찾을 수 없습니다.");
    }
}
