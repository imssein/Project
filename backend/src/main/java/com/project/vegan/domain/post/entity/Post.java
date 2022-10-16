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
    private Integer likesNum;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Post(String title, String content, Integer likesNum, Member member) {
        this.title = title;
        this.content = content;
        this.likesNum = likesNum;
        this.member = member;
    }

    public void change(String title, String content){
        this.title = title;
        this.content = content;
    }

    public void changeLikesNum(Integer likesNum){
        this.likesNum += likesNum;
    }
}
