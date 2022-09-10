package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.StoreUploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StoreUploadFileRepository extends JpaRepository<StoreUploadFile, Long>, StoreUploadFileRepositoryCustom {
    List<StoreUploadFile> findByStore(Store store);
}
