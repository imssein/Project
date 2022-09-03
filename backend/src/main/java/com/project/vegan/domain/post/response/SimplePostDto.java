package com.project.vegan.domain.post.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class SimplePostDto {
    private Long id;
    private String title;
    private String content;
    private MemberDto member;
    private List<HashTagDto> hashTags;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    public SimplePostDto(Post post, List<HashTag> hashTags) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.member = new MemberDto(post.getMember());
        this.hashTags = hashTags
                .stream()
                .map(HashTagDto::new)
                .collect(Collectors.toList());
        this.createdTime = post.getCreatedTime();
        this.modifiedTime = post.getModifiedTime();
    }
}
