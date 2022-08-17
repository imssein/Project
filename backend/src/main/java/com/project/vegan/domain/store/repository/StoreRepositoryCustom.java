package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.District;
import com.project.vegan.domain.store.entity.Store;

import java.util.List;

public interface StoreRepositoryCustom {
    List<Store> findAllFetch();
    List<Store> findAllFetchByConds(String categories,
                                    String vegetarianTypes,
                                    String district,
                                    String sortedBy,
                                    String query);
}
