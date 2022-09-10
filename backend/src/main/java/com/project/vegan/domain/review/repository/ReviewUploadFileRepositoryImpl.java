package com.project.vegan.domain.review.repository;

import com.project.vegan.domain.review.entity.ReviewUploadFile;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.review.entity.QReview.review;
import static com.project.vegan.domain.review.entity.QReviewUploadFile.reviewUploadFile;

@RequiredArgsConstructor
public class ReviewUploadFileRepositoryImpl implements ReviewUploadFileRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<ReviewUploadFile> findAllFetch() {
        return queryFactory.selectFrom(reviewUploadFile)
                .leftJoin(reviewUploadFile.review, review)
                .fetch();
    }
}
