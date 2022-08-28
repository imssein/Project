package com.project.vegan.domain.store.repository;

import com.project.vegan.domain.store.entity.Menu;
import com.project.vegan.domain.store.entity.QMenu;
import com.project.vegan.domain.store.entity.QStore;
import com.project.vegan.domain.store.entity.Store;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.project.vegan.domain.store.entity.QMenu.menu;
import static com.project.vegan.domain.store.entity.QStore.store;

@RequiredArgsConstructor
public class MenuRepositoryImpl implements MenuRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Menu> findAllFetch() {
        return queryFactory.selectFrom(menu)
                .leftJoin(menu.store, store).fetchJoin()
                .fetch();
    }

    @Override
    public List<Menu> findByMenuFetch(String menu) {
        return queryFactory.selectFrom(QMenu.menu)
                .leftJoin(QMenu.menu.store, store).fetchJoin()
                .where( QMenu.menu.value.eq(menu) )
                .fetch();
    }

    @Override
    public List<Menu> findByStore(Store store) {
        return queryFactory.selectFrom(menu)
                .leftJoin(menu.store, QStore.store).fetchJoin()
                .where( menu.store.eq(store) )
                .fetch();
    }
}
