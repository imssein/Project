package com.project.vegan.domain.like.controller;

import com.project.vegan.domain.like.service.LikeService;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("v1/api/likes")
public class LikeController {
    private final LikeService likeService;

    @ApiOperation("좋아요 목록 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<?> getLikes(@RequestParam("type") String type,
                            @LoginMember Member member){
        return likeService.getLikes(type, member);
    }

    @ApiOperation("좋아요 추가")
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Object addLike(@PathVariable("id") Long id,
                          @RequestParam("type") String type,
                          @LoginMember Member member){
        return likeService.addLike(id, type, member);
    }

    @ApiOperation("좋아요 삭제")
    @DeleteMapping("/{likeId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteLike(@PathVariable("likeId") Long likeId,
                           @LoginMember Member member){
        likeService.deleteLike(likeId, member);
    }
}
