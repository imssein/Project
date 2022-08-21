package com.project.vegan.domain.review.repository;

import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.store.entity.Store;

import java.util.List;

public interface ReviewRepositoryCustom {
    List<Review> findAllFetch();
    List<Review> findByStore(Store store);
    Review findByIdFetch(Long id);
}
