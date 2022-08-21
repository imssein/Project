package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.StoreUploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreUploadFileRepository extends JpaRepository<StoreUploadFile, Long> {
}
