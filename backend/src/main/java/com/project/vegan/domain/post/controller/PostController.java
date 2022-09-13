package com.project.vegan.domain.post.controller;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.post.request.PostRequest;
import com.project.vegan.domain.post.request.PostSaveRequest;
import com.project.vegan.domain.post.response.PostDto;
import com.project.vegan.domain.post.service.PostService;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public List<PostDto> getPosts(@RequestParam(name = "hashTag", required = false) String hashTag){
        return postService.getPosts(hashTag);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("게시글 저장")
    @PostMapping(value = "/post", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public PostDto post(@Validated @RequestPart(value = "requestData") PostRequest requestData,
                        @RequestPart(value = "requestFiles", required = false) List<MultipartFile> requestFiles,
                        @LoginMember Member member){
        return postService.post(new PostSaveRequest(requestData.getTitle(),
                requestData.getContent(),
                requestData.getHashTags(),
                requestFiles), member);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("게시글 상세 조회")
    @GetMapping("/{postId}")
    @ResponseStatus(HttpStatus.OK)
    public PostDto getPost(@PathVariable("postId") Long postId){
        return postService.getPost(postId);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("게시글 수정")
    @PostMapping(value = "/{postId}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public PostDto updatePost(@PathVariable("postId") Long postId,
                              @Validated @RequestPart(value = "requestData") PostRequest requestData,
                              @RequestPart(value = "requestFiles", required = false) List<MultipartFile> requestFiles,
                              @LoginMember Member member){
        return postService.update(new PostSaveRequest(requestData.getTitle(),
                requestData.getContent(),
                requestData.getHashTags(),
                requestFiles), member, postId);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("게시글 삭제")
    @DeleteMapping("/{postId}")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public void deletePost(@PathVariable("postId") Long postId,
                           @LoginMember Member member){
        postService.delete(postId, member);
    }
}
