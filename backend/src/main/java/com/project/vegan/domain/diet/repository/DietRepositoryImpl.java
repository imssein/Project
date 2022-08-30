package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.diet.entity.QDiet.diet;
import static com.project.vegan.domain.member.entity.QMember.member;

@RequiredArgsConstructor
public class DietRepositoryImpl implements DietRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Diet> findAllFetch() {
        return queryFactory.selectFrom(diet)
                .leftJoin(diet.member, member).fetchJoin()
                .fetch();
    }

    @Override
    public Diet findByIdFetch(Long dietId) {
        return queryFactory.selectFrom(diet)
                .leftJoin(diet.member, member).fetchJoin()
                .where(diet.id.eq(dietId))
                .fetchOne();
    }
}
