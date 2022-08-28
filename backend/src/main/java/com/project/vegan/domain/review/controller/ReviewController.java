package com.project.vegan.domain.review.controller;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.review.request.ReviewSaveRequest;
import com.project.vegan.domain.review.response.ReviewDto;
import com.project.vegan.domain.review.response.ReviewSaveResponse;
import com.project.vegan.domain.review.service.ReviewService;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("v1/api/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    @ApiOperation("리뷰 전체 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ReviewDto> getReviews(){
        return reviewService.getReviews();
    }

    @ApiOperation("리뷰 작성")
    @PostMapping("/{storeId}/review")
    @ResponseStatus(HttpStatus.CREATED)
    public ReviewSaveResponse review(@PathVariable("storeId") Long storeId,
                                     @RequestBody @Validated ReviewSaveRequest reviewSaveRequest,
                                     @LoginMember Member member) {
        return reviewService.save(reviewSaveRequest, member, storeId);
    }

    @ApiOperation("식당에 따른 리뷰 조회")
    @GetMapping("/{storeId}")
    @ResponseStatus(HttpStatus.OK)
    public List<ReviewDto> getReviewsByStore(@PathVariable("storeId") Long storeId){
        return reviewService.getReviewsByStore(storeId);
    }

    @ApiOperation("리뷰 수정")
    @PostMapping("/{storeId}/{reviewId}")
    @ResponseStatus(HttpStatus.OK)
    public ReviewDto updateReview(@PathVariable("storeId") Long storeId,
                                  @PathVariable("reviewId") Long reviewId,
                                  @RequestBody @Validated ReviewSaveRequest reviewSaveRequest,
                                  @LoginMember Member member){
        return reviewService.update(reviewSaveRequest, member, storeId, reviewId);
    }

    @ApiOperation("리뷰 삭제")
    @DeleteMapping("/{storeId}/{reviewId}")
    @ResponseStatus(HttpStatus.NON_AUTHORITATIVE_INFORMATION)
    public void delete(@PathVariable("storeId") Long storeId,
                       @PathVariable("reviewId") Long reviewId,
                       @LoginMember Member member) {
        reviewService.delete(storeId, reviewId, member);
    }

}
