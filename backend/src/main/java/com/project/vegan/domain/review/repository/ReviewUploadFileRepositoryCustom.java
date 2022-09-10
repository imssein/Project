package com.project.vegan.domain.review.repository;

import com.project.vegan.domain.review.entity.ReviewUploadFile;

import java.util.List;

public interface ReviewUploadFileRepositoryCustom {
    List<ReviewUploadFile> findAllFetch();
}
