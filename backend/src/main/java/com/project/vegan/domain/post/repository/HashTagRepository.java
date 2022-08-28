package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.HashTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HashTagRepository extends JpaRepository<HashTag, Long>, HashTagRepositoryCustom {
}
