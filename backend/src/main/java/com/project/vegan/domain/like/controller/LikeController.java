package com.project.vegan.domain.like.controller;

import com.project.vegan.domain.like.service.LikeService;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("v1/api/likes")
public class LikeController {
    private final LikeService likeService;

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("좋아요 목록 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public List<?> getLikes(@RequestParam("type") String type,
                            @LoginMember Member member){
        return likeService.getLikes(type, member);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("좋아요 추가")
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public Object addLike(@PathVariable("id") Long id,
                          @RequestParam("type") String type,
                          @LoginMember Member member){
        return likeService.addLike(id, type, member);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("좋아요 삭제")
    @DeleteMapping("/{likeId}")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public void deleteLike(@PathVariable("likeId") Long likeId,
                           @RequestParam("type") String type,
                           @LoginMember Member member){
        likeService.deleteLike(likeId, type, member);
    }
}
