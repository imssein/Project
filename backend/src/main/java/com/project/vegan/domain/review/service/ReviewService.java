package com.project.vegan.domain.review.service;

import com.project.vegan.domain.common.service.UploadFileService;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.review.repository.ReviewRepository;
import com.project.vegan.domain.review.repository.ReviewUploadFileRepository;
import com.project.vegan.domain.review.request.ReviewSaveRequest;
import com.project.vegan.domain.review.response.ReviewDto;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.common.service.UploadFileTypeConstants.REVIEW_TYPE;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final StoreRepository storeRepository;
    private final ReviewUploadFileRepository reviewUploadFileRepository;
    private final UploadFileService uploadFileService;

    public ReviewDto save(ReviewSaveRequest reviewSaveRequest, Member member, Long storeId){
        if(member == null){
            throw new ForbiddenException();
        }

        Store store = storeRepository.findByIdFetch(storeId);

        // 사용자는 한 식당에 한개의 리뷰만 남길 수 있음
        if( reviewRepository.findByStore(store).stream().anyMatch(r -> r.getMember().getId() == member.getId()) ){
            throw new ForbiddenException();
        }

        Review review = Review.of(reviewSaveRequest.getStarRating(), reviewSaveRequest.getContent(), store, member);

        Review save = reviewRepository.save(review);

        reviewSaveRequest.getMultipartFiles()
                .stream()
                .forEach(f -> uploadFileService.saveFile(f, REVIEW_TYPE, save.getId()));

        return new ReviewDto(save, reviewUploadFileRepository.findByReview(save));
    }

    public ReviewDto update(ReviewSaveRequest reviewSaveRequest, Member member, Long storeId, Long reviewId){
        if(member == null){
            throw new ForbiddenException();
        }

        Review review = reviewRepository.findByIdFetch(reviewId);

        if(member.getId() != review.getMember().getId()){
            throw new ForbiddenException();
        }

        review.change(reviewSaveRequest.getStarRating(), reviewSaveRequest.getContent());

        reviewUploadFileRepository.deleteAll(reviewUploadFileRepository.findByReview(review));

        reviewSaveRequest.getMultipartFiles()
                .stream()
                .forEach(f -> uploadFileService.saveFile(f, REVIEW_TYPE, review.getId()));

        return new ReviewDto(review, reviewUploadFileRepository.findByReview(review));
    }

    public List<ReviewDto> getReviews(){
        return reviewRepository.findAllFetch()
                .stream()
                .map(r -> new ReviewDto(r, reviewUploadFileRepository.findAllFetch()
                        .stream()
                        .filter(u -> u.getReview().getId() == r.getId())
                        .distinct()
                        .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public List<ReviewDto> getReviewsByStore(Long storeId){
        Store store = storeRepository.findById(storeId).orElseThrow();

        return reviewRepository.findByStore(store)
                .stream()
                .map(r -> new ReviewDto(r, reviewUploadFileRepository.findAllFetch()
                        .stream()
                        .filter(u -> u.getReview().getId() == r.getId())
                        .distinct()
                        .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public void delete(Long storeId, Long reviewId, Member member){
        Review review = reviewRepository.findByIdFetch(reviewId);

        if(member == null){
            throw new ForbiddenException();
        }

        if(review.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        reviewUploadFileRepository.deleteAll(reviewUploadFileRepository.findByReview(review));

        reviewRepository.delete(review);
    }
}
