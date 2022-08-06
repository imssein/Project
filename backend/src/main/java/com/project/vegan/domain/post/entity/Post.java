package com.project.vegan.domain.post.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import com.project.vegan.domain.member.entity.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;
    private String title;
    private String content;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
    @ElementCollection
    @CollectionTable(
            name = "hashtag",
            joinColumns = @JoinColumn(name = "post_id")
    )
    private List<String> hashTag;

    @Builder
    public Post(String title, String content, Member member, List<String> hashTag) {
        this.title = title;
        this.content = content;
        this.member = member;
        this.hashTag = hashTag;
    }
}
