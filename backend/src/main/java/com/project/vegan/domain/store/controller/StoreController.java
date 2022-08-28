package com.project.vegan.domain.store.controller;

import com.project.vegan.domain.store.response.StoreDetailDto;
import com.project.vegan.domain.store.response.StoreDto;
import com.project.vegan.domain.store.service.StoreService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("v1/api/stores")
public class StoreController {
    private final StoreService storeService;

    @ApiOperation("전체 맛집 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<StoreDto> getStores(){
        return storeService.getStores();
    }

    @ApiOperation("여러 조건에 따른 맛집 조회")
    @GetMapping("/conditions")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "categories",
                    value = "카테고리"
            ),
            @ApiImplicitParam(name = "vegetarianTypes",
                    value = "채식타입"
            ),
            @ApiImplicitParam(name = "districts",
                    value = "자치구(지역)"
            ),
            @ApiImplicitParam(name = "sorted",
                    value = "정렬 기준 ( starRating / likes )"
            ),
            @ApiImplicitParam(name = "query",
                    value = "검색어"
            )
    })
    public List<StoreDto> getStoresByParams(@RequestParam(value = "categories", required = false) String categories,
                                    @RequestParam(value = "vegetarianTypes", required = false) String vegetarianTypes,
                                    @RequestParam(value = "districts", required = false) String districts,
                                    @RequestParam(value = "sorted", required = false) String sorted,
                                    @RequestParam(value = "query", required = false) String query){
        return storeService.getStoresByConds(categories, vegetarianTypes, districts, sorted, query);
    }

    @ApiOperation("맛집 상세 조회")
    @GetMapping("/{storeId}")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id",
                    value = "식별값",
                    paramType = "path",
                    required = true)
    })
    public StoreDetailDto getStore(@PathVariable("storeId") Long storeId){
        return storeService.getStore(storeId);
    }

}
