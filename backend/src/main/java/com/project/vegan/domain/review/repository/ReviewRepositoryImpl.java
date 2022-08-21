package com.project.vegan.domain.review.repository;

import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.store.entity.QStore;
import com.project.vegan.domain.store.entity.Store;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.member.entity.QMember.member;
import static com.project.vegan.domain.review.entity.QReview.review;
import static com.project.vegan.domain.store.entity.QStore.store;

@RequiredArgsConstructor
public class ReviewRepositoryImpl implements ReviewRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Review> findAllFetch() {
        return queryFactory.selectFrom(review)
                .leftJoin(review.store, store).fetchJoin()
                .leftJoin(review.member, member).fetchJoin()
                .orderBy(review.id.asc())
                .fetch();
    }

    @Override
    public List<Review> findByStore(Store store) {
        return queryFactory.selectFrom(review)
                .leftJoin(review.store, QStore.store).fetchJoin()
                .leftJoin(review.member, member).fetchJoin()
                .where(review.store.eq(store))
                .orderBy(review.id.asc())
                .fetch();
    }

    @Override
    public Review findByIdFetch(Long id) {
        return queryFactory.selectFrom(review)
                .leftJoin(review.store, store).fetchJoin()
                .leftJoin(review.member, member).fetchJoin()
                .where(review.id.eq(id))
                .fetchOne();
    }
}
