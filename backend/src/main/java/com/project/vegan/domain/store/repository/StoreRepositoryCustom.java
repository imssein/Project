package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Store;

import java.util.List;

public interface StoreRepositoryCustom {
    List<Store> findAllFetch();
    List<Store> findAllFetchByParams(String categories,
                                     String vegetarianTypes,
                                     String district,
                                     String sortedBy,
                                     String query);
    Store findByIdFetch(Long storeId);
    List<Store> findStoreIdsByVegetarianTypes(String vegetarianTypes);
}
