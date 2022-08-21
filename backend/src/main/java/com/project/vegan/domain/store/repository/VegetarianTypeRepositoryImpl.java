package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.QStore;
import com.project.vegan.domain.store.entity.QVegetarianType;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.VegetarianType;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.store.entity.QStore.*;
import static com.project.vegan.domain.store.entity.QVegetarianType.*;

@RequiredArgsConstructor
public class VegetarianTypeRepositoryImpl implements VegetarianTypeRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<VegetarianType> findAllFetch() {
        return queryFactory.selectFrom(vegetarianType1)
                .leftJoin(vegetarianType1.store, store).fetchJoin()
                .fetch();
    }

    @Override
    public List<VegetarianType> findByVegetarianTypesFetch(String vegetarianTypes) {
        List<String> vegetarianTypeList = getVegetarianTypeList(vegetarianTypes);

        return queryFactory.selectFrom(vegetarianType1)
                .leftJoin(vegetarianType1.store, store).fetchJoin()
                .where(vegetarianType1.vegetarianType.in(vegetarianTypeList))
                .fetch();
    }

    @Override
    public List<VegetarianType> findByVegetarianTypeFetch(String vegetarianType) {
        return queryFactory.selectFrom(vegetarianType1)
                .leftJoin(vegetarianType1.store, store).fetchJoin()
                .where( vegetarianType1.vegetarianType.eq(vegetarianType) )
                .fetch();
    }

    @Override
    public List<VegetarianType> findByStore(Store store) {
        return queryFactory.selectFrom(vegetarianType1)
                .leftJoin(vegetarianType1.store, QStore.store).fetchJoin()
                .where( vegetarianType1.store.eq(store) )
                .fetch();
    }

    private List<String> getVegetarianTypeList(String vegetarianTypes) {
        if(vegetarianTypes == null){
            return new ArrayList<>();
        }

        return Arrays.stream(vegetarianTypes.split(","))
                .map(v -> v.trim())
                .collect(Collectors.toList());
    }
}
