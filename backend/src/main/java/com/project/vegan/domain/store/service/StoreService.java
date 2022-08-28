package com.project.vegan.domain.store.service;

import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.VegetarianType;
import com.project.vegan.domain.store.repository.MenuRepository;
import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.domain.store.repository.VegetarianTypeRepository;
import com.project.vegan.domain.store.response.StoreDetailDto;
import com.project.vegan.domain.store.response.StoreDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class StoreService {
    private final StoreRepository storeRepository;
    private final VegetarianTypeRepository vegetarianTypeRepository;
    private final MenuRepository menuRepository;

    public List<StoreDto> getStores(){
        List<VegetarianType> vegetarianTypes = vegetarianTypeRepository.findAllFetch();

        /**
         * 쿼리가 계속 나가지 않도록
         * vegetarianTypeRepository.findByStore 을 쓰지않고
         * stream 으로 처리에서 넣어줌
         */
        return storeRepository.findAllFetch()
                .stream()
                .map(s -> new StoreDto(s, vegetarianTypes
                        .stream()
                        .filter(v -> v.getStore().getId() == s.getId())
                        .distinct()
                        .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public List<StoreDto> getStoresByConds(String categories,
                                           String vegetarianTypes,
                                           String district,
                                           String sorted,
                                           String query){
        List<VegetarianType> vegetarianTypeList = vegetarianTypeRepository.findAllFetch();

        /**
         * 쿼리가 계속 나가지 않도록
         * vegetarianTypeRepository.findByStore 을 쓰지않고
         * stream 으로 처리에서 넣어줌
         */
        return storeRepository.findAllFetchByParams(categories, vegetarianTypes, district, sorted, query)
                .stream()
                .map(s -> new StoreDto(s, vegetarianTypeList
                        .stream()
                        .filter(v -> v.getStore().getId() == s.getId())
                        .distinct()
                        .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public StoreDetailDto getStore(Long id){
        Store store = storeRepository.findByIdFetch(id);

        return new StoreDetailDto(store,
                vegetarianTypeRepository.findByStore(store),
                menuRepository.findByStore(store));
    }
}
