package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.District;
import com.project.vegan.domain.store.entity.Store;

import java.util.List;

public interface StoreRepositoryCustom {
    List<Store> findAllFetchByConds(String categories,
                                    String vegetarianTypes,
                                    District district,
                                    String sortedBy);
}
