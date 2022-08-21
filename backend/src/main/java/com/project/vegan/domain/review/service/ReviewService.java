package com.project.vegan.domain.review.service;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.review.repository.ReviewRepository;
import com.project.vegan.domain.review.request.ReviewSaveRequest;
import com.project.vegan.domain.review.response.ReviewDto;
import com.project.vegan.domain.review.response.ReviewSaveResponse;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final StoreRepository storeRepository;

    public ReviewSaveResponse save(ReviewSaveRequest reviewSaveRequest, Member member, Long storeId){
        if(member == null){
            throw new ForbiddenException();
        }

        Store store = storeRepository.findByIdFetch(storeId);

        Review review = Review.of(reviewSaveRequest.getStarRating(), reviewSaveRequest.getContent(), store, member);

        Review save = reviewRepository.save(review);

        return new ReviewSaveResponse(save.getId());
    }

    public List<ReviewDto> getReviews(){
        return reviewRepository.findAllFetch()
                .stream()
                .map(ReviewDto::new)
                .collect(Collectors.toList());
    }

    public List<ReviewDto> getReviewsByStore(Long storeId){
        Store store = storeRepository.findById(storeId).orElseThrow();

        return reviewRepository.findByStore(store)
                .stream()
                .map(ReviewDto::new)
                .collect(Collectors.toList());
    }

    public void delete(Long reviewId, Long storeId, Member member){
        Review review = reviewRepository.findByIdFetch(reviewId);

        if(member == null){
            throw new ForbiddenException();
        }

        if(review.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        reviewRepository.delete(review);
    }
}
