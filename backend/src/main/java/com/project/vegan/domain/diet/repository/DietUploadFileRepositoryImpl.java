package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.DietUploadFile;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.diet.entity.QDiet.diet;
import static com.project.vegan.domain.diet.entity.QDietUploadFile.dietUploadFile;

@RequiredArgsConstructor
public class DietUploadFileRepositoryImpl implements DietUploadFileRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<DietUploadFile> findAllFetch() {
        return queryFactory.selectFrom(dietUploadFile)
                .leftJoin(dietUploadFile.diet, diet)
                .fetch();
    }
}
