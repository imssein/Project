package com.project.vegan.domain.post.response;

import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.internal.util.privilegedactions.LoadClass;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class DetailPostDto {
    private Long id;
    private String title;
    private String content;
    private MemberDto member;
    private List<HashTagDto> hashTags;
    private LocalDateTime createdTime;
    private LocalDateTime modifiedTime;

    public DetailPostDto(Post post, List<HashTag> hashTags) {
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
