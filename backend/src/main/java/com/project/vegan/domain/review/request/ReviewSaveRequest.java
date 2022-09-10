package com.project.vegan.domain.review.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class ReviewSaveRequest {
    @Positive
    private Integer starRating;
    @NotEmpty
    private String content;
    private List<MultipartFile> multipartFiles = new ArrayList<>();

    @Builder
    public ReviewSaveRequest(Integer starRating, String content, List<MultipartFile> multipartFiles) {
        this.starRating = starRating;
        this.content = content;
        this.multipartFiles = multipartFiles;
    }
}
