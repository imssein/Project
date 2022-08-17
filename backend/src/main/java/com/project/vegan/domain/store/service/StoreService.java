package com.project.vegan.domain.store.service;

import com.project.vegan.domain.store.repository.StoreRepository;
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

    public List<StoreDto> getStores(){
        return storeRepository.findAllFetch()
                .stream()
                .map(StoreDto::new)
                .collect(Collectors.toList());
    }

    public List<StoreDto> getStoresByConds(String categories,
                                           String vegetarianTypes,
                                           String district,
                                           String sorted,
                                           String query){
        return storeRepository.findAllFetchByConds(categories, vegetarianTypes, district, sorted, query)
                .stream()
                .map(StoreDto::new)
                .collect(Collectors.toList());
    }
}
