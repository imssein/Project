package com.project.vegan.domain.review.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ReviewSaveResponse {
    private Long id;

    public ReviewSaveResponse(Long id) {
        this.id = id;
    }
}
