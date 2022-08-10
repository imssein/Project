package com.project.vegan.domain.like.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.store.entity.Store;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "likes")
public class Like extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_id")
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @Builder
    public Like(Member member, Post post, Store store) {
        this.member = member;
        this.post = post;
        this.store = store;
    }
}
