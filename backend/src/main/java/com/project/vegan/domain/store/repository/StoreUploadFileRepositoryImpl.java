package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.QStore;
import com.project.vegan.domain.store.entity.QStoreUploadFile;
import com.project.vegan.domain.store.entity.StoreUploadFile;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.store.entity.QStore.*;
import static com.project.vegan.domain.store.entity.QStoreUploadFile.*;

@RequiredArgsConstructor
public class StoreUploadFileRepositoryImpl implements StoreUploadFileRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<StoreUploadFile> findAllFetch() {
        return queryFactory.selectFrom(storeUploadFile)
                .leftJoin(storeUploadFile.store, store)
                .fetch();
    }
}
