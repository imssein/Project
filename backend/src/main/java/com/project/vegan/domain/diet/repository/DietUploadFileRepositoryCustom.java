package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.DietUploadFile;

import java.util.List;

public interface DietUploadFileRepositoryCustom {
    List<DietUploadFile> findAllFetch();
}
