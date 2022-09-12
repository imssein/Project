package com.project.vegan.domain.review.repository;

import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.review.entity.ReviewUploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewUploadFileRepository extends JpaRepository<ReviewUploadFile, Long>, ReviewUploadFileRepositoryCustom {
    List<ReviewUploadFile> findByReview(Review review);
    boolean existsByReview(Review review);
}
