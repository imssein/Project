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

    public void change(Integer starRating, String content){
        this.starRating = starRating;
        this.content = content;
    }

    public static Review of(Integer starRating, String content, Store store, Member member){
        Review review = Review.builder()
                .starRating(starRating)
                .content(content)
                .store(store)
                .member(member)
                .build();

        review.getStore().getReviews().add(review);

        Double result = calStarRating(starRating, review);

        review.getStore().changeStarRating(result);

        return review;
    }

    private static Double calStarRating(Integer starRating, Review review) {
        Double result = Double.valueOf(starRating);

        for(Review r : review.getStore().getReviews()){
            result += Double.valueOf(r.getStarRating());
        }

        return result / review.getStore().getReviews().size();
    }
}
