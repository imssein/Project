package com.project.vegan.domain.review.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.common.dto.UploadFileDto;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.review.entity.ReviewUploadFile;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class ReviewDto {
    private Long id;
    private Integer starRating;
    private String content;
    private Long storeId;
    private MemberDto memberDto;
    private List<UploadFileDto> uploadFiles = new ArrayList<>();
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    public ReviewDto(Review review, List<ReviewUploadFile> uploadFiles){
        this.id = review.getId();
        this.starRating = review.getStarRating();
        this.content = review.getContent();
        this.storeId = review.getStore().getId();
        this.memberDto = new MemberDto(review.getMember());
        this.uploadFiles = uploadFiles.stream().map(UploadFileDto::new).collect(Collectors.toList());
        this.createdTime = review.getCreatedTime();
        this.modifiedTime = review.getModifiedTime();
    }
}
