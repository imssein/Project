package com.project.vegan.domain.like.repository;

import com.project.vegan.domain.like.entity.Like;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.member.entity.QMember;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.like.entity.QLike.like;
import static com.project.vegan.domain.member.entity.QMember.member;
import static com.project.vegan.domain.post.entity.QPost.post;
import static com.project.vegan.domain.store.entity.QStore.store;

@RequiredArgsConstructor
public class LikeRepositoryImpl implements LikeRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public Like findByIdFetch(Long likeId) {
        return queryFactory.selectFrom(like)
                .leftJoin(like.member, member).fetchJoin()
                .leftJoin(like.post, post).fetchJoin()
                .leftJoin(like.store, store).fetchJoin()
                .where(like.id.eq(likeId))
                .fetchOne();
    }

    @Override
    public List<Like> findByMemberFetch(Member member) {
        return queryFactory.selectFrom(like)
                .leftJoin(like.member, QMember.member).fetchJoin()
                .leftJoin(like.post, post).fetchJoin()
                .leftJoin(like.store, store).fetchJoin()
                .where(like.member.eq(member))
                .fetch();
    }
}
