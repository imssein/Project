package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.PostUploadFile;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.post.entity.QPost.post;
import static com.project.vegan.domain.post.entity.QPostUploadFile.postUploadFile;

@RequiredArgsConstructor
public class PostUploadFileRepositoryImpl implements PostUploadFileRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<PostUploadFile> findAllFetch() {
        return queryFactory.selectFrom(postUploadFile)
                .leftJoin(postUploadFile.post, post)
                .fetch();
    }
}
