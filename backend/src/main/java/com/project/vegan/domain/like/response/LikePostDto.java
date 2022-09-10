package com.project.vegan.domain.like.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.common.dto.UploadFileDto;
import com.project.vegan.domain.like.entity.Like;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.PostUploadFile;
import com.project.vegan.domain.post.response.DetailPostDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class LikePostDto {
    private Long id;
    private MemberDto member;
    private DetailPostDto post;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    @Builder
    public LikePostDto(Like like, List<HashTag> hashTags, List<PostUploadFile> uploadFiles) {
        this.id = like.getId();
        this.member = new MemberDto(like.getMember());
        this.post = new DetailPostDto(like.getPost(), hashTags, uploadFiles);
        this.createdTime = like.getCreatedTime();
        this.modifiedTime = like.getModifiedTime();
    }
}
