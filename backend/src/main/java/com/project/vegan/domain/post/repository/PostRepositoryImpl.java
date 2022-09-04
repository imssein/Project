package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.member.entity.QMember.member;
import static com.project.vegan.domain.post.entity.QPost.post;

@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepositoryCustom{
    private final JPAQueryFactory queryFactory;
    private final HashTagRepository hashTagRepository;

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

    @Override
    public List<Post> findByHashTag(String hashTag) {
        return queryFactory.selectFrom(post)
                .leftJoin(post.member, member).fetchJoin()
                .where(hashTagIn(hashTag))
                .fetch();
    }

    private BooleanExpression hashTagIn(String hashTag){
        List<Long> postIds = hashTagRepository.findByHashTagFetch(hashTag)
                .stream()
                .map(h -> h.getPost().getId())
                .distinct()
                .collect(Collectors.toList());

        return postIds.size() > 0 ? post.id.in(postIds) : null;
    }
}
