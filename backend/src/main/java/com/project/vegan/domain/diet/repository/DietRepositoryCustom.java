package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;

import java.time.LocalDateTime;
import java.util.List;

public interface DietRepositoryCustom {
    List<Diet> findAllFetch(LocalDateTime localDateTime);
    Diet findByIdFetch(Long dietId);
}
