package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DietRepository extends JpaRepository<Diet, Long> {
}
