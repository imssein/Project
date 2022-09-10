package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.StoreUploadFile;

import java.util.List;

public interface StoreUploadFileRepositoryCustom {
    List<StoreUploadFile> findAllFetch();
}
