package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Menu;
import com.project.vegan.domain.store.entity.QMenu;
import com.project.vegan.domain.store.entity.QStore;
import com.project.vegan.domain.store.entity.Store;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.store.entity.QMenu.*;
import static com.project.vegan.domain.store.entity.QStore.*;

@RequiredArgsConstructor
public class MenuRepositoryImpl implements MenuRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Menu> findAllFetch() {
        return queryFactory.selectFrom(menu1)
                .leftJoin(menu1.store, store).fetchJoin()
                .fetch();
    }

    @Override
    public List<Menu> findByMenuFetch(String menu) {
        return queryFactory.selectFrom(menu1)
                .leftJoin(menu1.store, store).fetchJoin()
                .where( menu1.menu.eq(menu) )
                .fetch();
    }

    @Override
    public List<Menu> findByStore(Store store) {
        return queryFactory.selectFrom(menu1)
                .leftJoin(menu1.store, QStore.store).fetchJoin()
                .where( menu1.store.eq(store) )
                .fetch();
    }
}
