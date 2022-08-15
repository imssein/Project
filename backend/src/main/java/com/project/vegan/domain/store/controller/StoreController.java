package com.project.vegan.domain.store.controller;

import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.domain.store.response.StoreDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("v1/api/stores")
public class StoreController {
    private final StoreRepository storeRepository;

    @ApiOperation("전체 맛집 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "categories",
                    value = "카테고리"
            ),
            @ApiImplicitParam(name = "vegetarianTypes",
                    value = "채식타입"
            ),
            @ApiImplicitParam(name = "district",
                    value = "자치구(지역)"
            )
    })
    public Page<StoreDto> getStores(@RequestParam(value = "categories", required = false) String categories,
                                    @RequestParam(value = "vegetarianTypes", required = false) String vegetarianTypes,
                                    @RequestParam(value = "district", required = false) String district){
        return null;
    }
}
