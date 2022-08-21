package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Menu;
import com.project.vegan.domain.store.entity.Store;

import java.util.List;

public interface MenuRepositoryCustom {
    List<Menu> findAllFetch();
    List<Menu> findByMenuFetch(String menu);
    List<Menu> findByStore(Store store);
}
