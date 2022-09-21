package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import static com.project.vegan.domain.diet.entity.QDiet.diet;
import static com.project.vegan.domain.member.entity.QMember.member;

@RequiredArgsConstructor
public class DietRepositoryImpl implements DietRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Diet> findAllFetch(LocalDateTime localDateTime) {
        return queryFactory.selectFrom(diet)
                .leftJoin(diet.member, member).fetchJoin()
                .where(dateEq(localDateTime))
                .fetch();
    }

    @Override
    public Diet findByIdFetch(Long dietId) {
        return queryFactory.selectFrom(diet)
                .leftJoin(diet.member, member).fetchJoin()
                .where(diet.id.eq(dietId))
                .fetchOne();
    }

    private BooleanExpression dateEq(LocalDateTime localDateTime){
        if(localDateTime == null){
            return null;
        }
        return diet.createdTime.between(localDateTime, localDateTime.plusDays(1));
    }
}
