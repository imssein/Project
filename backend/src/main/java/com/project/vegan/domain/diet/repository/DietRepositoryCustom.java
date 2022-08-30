package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;

import java.util.List;

public interface DietRepositoryCustom {
    List<Diet> findAllFetch();
    Diet findByIdFetch(Long dietId);
}
