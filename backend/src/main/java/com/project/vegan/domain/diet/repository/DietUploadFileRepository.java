package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.diet.entity.DietUploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DietUploadFileRepository extends JpaRepository<DietUploadFile, Long>, DietUploadFileRepositoryCustom {
    List<DietUploadFile> findByDiet(Diet diet);
    boolean existsByDiet(Diet diet);
}
