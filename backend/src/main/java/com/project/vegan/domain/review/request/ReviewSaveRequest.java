package com.project.vegan.domain.review.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

@NoArgsConstructor
@Getter
@Setter
public class ReviewSaveRequest {
    @Positive
    private Integer starRating;
    @NotEmpty
    private String content;

    @Builder
    public ReviewSaveRequest(Integer starRating, String content) {
        this.starRating = starRating;
        this.content = content;
    }
}
