package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.Post;

import java.util.List;

public interface PostRepositoryCustom {
    List<Post> findAllFetch();
    Post findByIdFetch(Long postId);
}
