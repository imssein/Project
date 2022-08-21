package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.VegetarianType;

import java.util.List;

public interface VegetarianTypeRepositoryCustom {
    List<VegetarianType> findAllFetch();
    List<VegetarianType> findByVegetarianTypesFetch(String vegetarianTypes);
    List<VegetarianType> findByVegetarianTypeFetch(String vegetarianType);
    List<VegetarianType> findByStore(Store store);
}
