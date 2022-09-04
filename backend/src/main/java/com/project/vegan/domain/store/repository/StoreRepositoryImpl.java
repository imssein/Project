package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.*;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.review.entity.QReview.review;
import static com.project.vegan.domain.store.entity.QStore.store;

@RequiredArgsConstructor
public class StoreRepositoryImpl implements StoreRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final VegetarianTypeRepository vegetarianTypeRepository;
    private final MenuRepository menuRepository;

    @Override
    public List<Store> findAllFetch() {
        return queryFactory.selectFrom(store)
                .leftJoin(store.reviews, review).fetchJoin()
                .orderBy(store.id.asc())
                .fetch();
    }

    @Override
    public List<Store> findAllFetchByParams(String categories,
                                            String vegetarianTypes,
                                            String districts,
                                            String sortedBy,
                                            String query) {
        List<Category> categoryList = getCategoryList(categories);
        List<District> districtList = getDistrictList(districts);
        List<VegetarianType> vegetarianTypeList = vegetarianTypeRepository.findByVegetarianTypesFetch(vegetarianTypes);

        return queryFactory.selectFrom(store)
                .leftJoin(store.reviews, review).fetchJoin()
                .where(
                        categoriesIn(categoryList),
                        districtsIn(districtList),
                        searchExp(query),
                        vegetarianTypesIn(vegetarianTypeList)
                )
                .orderBy(sortCond(sortedBy))
                .fetch();
    }

    @Override
    public Store findByIdFetch(Long storeId) {
        return queryFactory.selectFrom(store)
                .leftJoin(store.reviews, review)
                .where(store.id.eq(storeId))
                .fetchOne();
    }

    private BooleanExpression vegetarianTypesIn(List<VegetarianType> vegetarianTypes) {
        List<Long> storeIds = vegetarianTypes
                .stream()
                .map(v -> v.getStore().getId())
                .distinct()
                .collect(Collectors.toList());

        return storeIds.size() > 0 ? store.id.in(storeIds) : null;
    }

    private BooleanExpression menusIn(List<Menu> menus) {
        List<Long> storeIds = menus
                .stream()
                .map(v -> v.getStore().getId())
                .distinct()
                .collect(Collectors.toList());

        return storeIds.size() > 0 ? store.id.in(storeIds) : null;
    }

    private BooleanExpression searchExp(String query) {
        if (query == null) {
            return null;
        } else if (query.isBlank()) {
            return null;
        }

        List<VegetarianType> vegetarianTypeList = vegetarianTypeRepository.findByVegetarianTypeFetch(query);
        List<Menu> menuList = menuRepository.findByMenuFetch(query);

        return store.address.contains(query)
                .or(store.name.contains(query))
                .or(vegetarianTypesIn(vegetarianTypeList))
                .or(menusIn(menuList))
                .or(District.check(query) ? store.district.eq(District.valueOf(query)) : null)
                .or(Category.check(query) ? store.category.eq(Category.valueOf(query)) : null);
    }

    private BooleanExpression districtsIn(List<District> districts) {
        return districts.size() > 0 ? store.district.in(districts) : null;
    }

    private BooleanExpression categoriesIn(List<Category> categories) {
        return categories.size() > 0 ? store.category.in(categories) : null;
    }

    private OrderSpecifier<?> sortCond(String cond) {
        if ("starRating".equals(cond)) {
            return store.starRating.desc().nullsLast();
        } else if ("likes".equals(cond)) {
            return store.likesNum.desc().nullsLast();
        }

        return store.id.asc();
    }

    private List<String> getVegetarianTypeList(String vegetarianTypes) {
        if (vegetarianTypes == null) {
            return new ArrayList<>();
        }

        return Arrays.stream(vegetarianTypes.split(","))
                .map(v -> v.trim())
                .collect(Collectors.toList());
    }

    private List<Category> getCategoryList(String categories) {
        if (categories == null) {
            return new ArrayList<>();
        } else if (categories.isBlank()) {
            return new ArrayList<>();
        }

        return Arrays.stream(categories.split(","))
                .map(c -> Category.valueOf(c.trim()))
                .collect(Collectors.toList());
    }

    private List<District> getDistrictList(String districts) {
        if (districts == null) {
            return new ArrayList<>();
        } else if (districts.isBlank()) {
            return new ArrayList<>();
        }

        return Arrays.stream(districts.split(","))
                .map(d -> findDistrict(d))
                .collect(Collectors.toList());
    }

    private District findDistrict(String district) {
        District dist = null;
        for(District d : District.values()){
            if(d.getDistrictValue().equals(district)){
                dist = d;
                break;
            }
        }
        return dist;
    }

}
