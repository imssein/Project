package com.project.vegan.domain.post.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.common.dto.UploadFileDto;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.post.entity.PostUploadFile;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class PostDto {
    private Long id;
    private String title;
    private String content;
    private Integer likesNum;
    private MemberDto member;
    private List<HashTagDto> hashTags = new ArrayList<>();
    private List<UploadFileDto> uploadFiles = new ArrayList<>();
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    public PostDto(Post post, List<HashTag> hashTags, List<PostUploadFile> uploadFiles) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.likesNum = post.getLikesNum();
        this.member = new MemberDto(post.getMember());
        this.hashTags = hashTags
                .stream()
                .map(HashTagDto::new)
                .collect(Collectors.toList());
        this.uploadFiles = uploadFiles.stream().map(UploadFileDto::new).collect(Collectors.toList());
        this.createdTime = post.getCreatedTime();
        this.modifiedTime = post.getModifiedTime();
    }
}
