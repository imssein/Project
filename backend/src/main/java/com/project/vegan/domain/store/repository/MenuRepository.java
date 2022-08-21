package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long>, MenuRepositoryCustom {
}
