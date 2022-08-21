package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.VegetarianType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VegetarianTypeRepository extends JpaRepository<VegetarianType, Long>, VegetarianTypeRepositoryCustom {
}
