package com.project.vegan.domain.review.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.review.entity.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
public class ReviewDto {
    private Long id;
    private Integer starRating;
    private String content;
    private Long storeId;
    private MemberDto memberDto;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    public ReviewDto(Review review){
        this.id = review.getId();
        this.starRating = review.getStarRating();
        this.content = review.getContent();
        this.storeId = review.getStore().getId();
        this.memberDto = new MemberDto(review.getMember());
        this.createdTime = review.getCreatedTime();
        this.modifiedTime = review.getModifiedTime();
    }
}
