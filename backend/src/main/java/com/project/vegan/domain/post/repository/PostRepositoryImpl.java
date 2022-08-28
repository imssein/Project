package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.Post;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.member.entity.QMember.member;
import static com.project.vegan.domain.post.entity.QPost.post;

@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Post> findAllFetch() {
        return queryFactory.selectFrom(post)
                .leftJoin(post.member, member).fetchJoin()
                .fetch();
    }

    @Override
    public Post findByIdFetch(Long postId) {
        return queryFactory.selectFrom(post)
                .leftJoin(post.member, member).fetchJoin()
                .where(post.id.eq(postId))
                .fetchOne();
    }
}
