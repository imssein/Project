package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;

import java.util.List;

public interface HashTagRepositoryCustom {
    List<HashTag> findAllFetch();
    List<HashTag> findByPost(Post post);
    List<HashTag> findByHashTagFetch(String hashTag);
}
