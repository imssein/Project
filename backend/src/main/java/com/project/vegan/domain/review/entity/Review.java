package com.project.vegan.domain.review.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.store.entity.Store;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Review extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;
    private Integer starRating;
    private String content;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Review(Integer starRating, String content, Store store, Member member) {
        this.starRating = starRating;
        this.content = content;
        this.store = store;
        this.member = member;
    }
}
