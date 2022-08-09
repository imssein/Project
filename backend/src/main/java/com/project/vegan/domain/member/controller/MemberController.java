package com.project.vegan.domain.member.controller;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.member.request.MemberJoinRequest;
import com.project.vegan.domain.member.request.MemberLoginRequest;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.member.response.MemberJoinResponse;
import com.project.vegan.domain.member.response.MemberLoginResponse;
import com.project.vegan.domain.member.service.MemberService;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("v1/api/members")
public class MemberController {
    private final MemberService memberService;

    @ApiOperation("로그인")
    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public MemberLoginResponse login(@Validated @RequestBody MemberLoginRequest memberLoginRequest){
        MemberLoginResponse memberLoginResponse = memberService.login(memberLoginRequest);
        return memberLoginResponse;
    }

    @ApiOperation("회원가입")
    @PostMapping("/join")
    @ResponseStatus(HttpStatus.CREATED)
    public MemberJoinResponse join(@Validated @RequestBody MemberJoinRequest memberJoinRequest){
        MemberJoinResponse memberJoinResponse = memberService.join(memberJoinRequest);
        return memberJoinResponse;
    }

    @ApiOperation("마이 페이지")
    @GetMapping("/me")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public MemberDto myPage(@LoginMember Member member){
        return new MemberDto(member);
    }
}
