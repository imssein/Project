package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.PostUploadFile;

import java.util.List;

public interface PostUploadFileRepositoryCustom {
    List<PostUploadFile> findAllFetch();
}
