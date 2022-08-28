package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.post.entity.QHashTag;
import com.project.vegan.domain.post.entity.QPost;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.post.entity.QHashTag.hashTag;
import static com.project.vegan.domain.post.entity.QPost.*;
import static com.project.vegan.domain.post.entity.QPost.post;


@RequiredArgsConstructor
public class HashTagRepositoryImpl implements HashTagRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<HashTag> findAllFetch() {
        return queryFactory.selectFrom(hashTag)
                .leftJoin(hashTag.post, post).fetchJoin()
                .fetch();
    }

    @Override
    public List<HashTag> findByPost(Post post) {
        return queryFactory.selectFrom(hashTag)
                .leftJoin(hashTag.post, QPost.post).fetchJoin()
                .where(hashTag.post.eq(post))
                .fetch();
    }

    @Override
    public List<HashTag> findByHashTagFetch(String hashTag) {
        return queryFactory.selectFrom(QHashTag.hashTag)
                .leftJoin(QHashTag.hashTag.post, post).fetchJoin()
                .where(QHashTag.hashTag.value.eq(hashTag))
                .fetch();
    }
}
