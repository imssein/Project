package com.project.vegan.domain.post.controller;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.post.request.PostSaveRequest;
import com.project.vegan.domain.post.response.DetailPostDto;
import com.project.vegan.domain.post.response.SimplePostDto;
import com.project.vegan.domain.post.service.PostService;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/v1/api/posts")
public class PostController {
    private final PostService postService;

    @ApiOperation("게시글 목록 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<SimplePostDto> getPosts(@RequestParam(name = "hashTag", required = false) String hashTag){
        return postService.getPosts();
    }

    @ApiOperation("게시글 저장")
    @PostMapping("/post")
    @ResponseStatus(HttpStatus.CREATED)
    public DetailPostDto post(@Validated @RequestBody PostSaveRequest postSaveRequest,
                              @LoginMember Member member){
        return postService.post(postSaveRequest, member);
    }

    @ApiOperation("게시글 상세 조회")
    @GetMapping("/{postId}")
    @ResponseStatus(HttpStatus.OK)
    public DetailPostDto getPost(@PathVariable("postId") Long postId){
        return postService.getPost(postId);
    }

    @ApiOperation("게시글 수정")
    @PostMapping("/{postId}")
    @ResponseStatus(HttpStatus.OK)
    public DetailPostDto updatePost(@PathVariable("postId") Long postId,
                                    @Validated @RequestBody PostSaveRequest postSaveRequest,
                                    @LoginMember Member member){
        return postService.update(postSaveRequest, member, postId);
    }

    @ApiOperation("게시글 삭제")
    @DeleteMapping("/{postId}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePost(@PathVariable("postId") Long postId,
                           @LoginMember Member member){
        postService.delete(postId, member);
    }
}
