package com.project.vegan.domain.diet.controller;

import com.project.vegan.domain.diet.request.DietRequest;
import com.project.vegan.domain.diet.request.DietSaveRequest;
import com.project.vegan.domain.diet.response.DietDto;
import com.project.vegan.domain.diet.service.DietService;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.global.security.annotation.LoginMember;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/v1/api/diets")
public class DietController {
    private final DietService dietService;

    @ApiOperation("식단 목록 조회")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DietDto> getDiets(@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") LocalDateTime date){
        return dietService.getDiets(date);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("식단 저장")
    @PostMapping(value = "/diet", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public DietDto save(@Validated @RequestPart("requestData") DietRequest requestData,
                        @RequestPart(value = "requestFiles", required = false) List<MultipartFile> requestFiles,
                        @LoginMember Member member){
        return dietService.save(new DietSaveRequest(requestData.getVegetarianType(),
                requestData.getType(),
                requestData.getAmount(),
                requestData.getMemo(), requestFiles), member);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("식단 상세 조회")
    @GetMapping("/{dietId}")
    @ResponseStatus(HttpStatus.OK)
    public DietDto getDiet(@PathVariable("dietId") Long dietId){
        return dietService.getDiet(dietId);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("식단 수정")
    @PostMapping(value = "/{dietId}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public DietDto updateDiet(@PathVariable("dietId") Long dietId,
                              @Validated @RequestPart("requestData") DietRequest requestData,
                              @RequestPart(value = "requestFiles", required = false) List<MultipartFile> requestFiles,
                              @LoginMember Member member){
        return dietService.update(new DietSaveRequest(requestData.getVegetarianType(),
                requestData.getType(),
                requestData.getAmount(),
                requestData.getMemo(), requestFiles), member, dietId);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @ApiOperation("식단 삭제")
    @DeleteMapping("/{dietId}")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "사용자 인증을 위한 accessToken", paramType = "header", required = true)
    })
    public void deleteDiet(@PathVariable("dietId") Long dietId,
                           @LoginMember Member member){
        dietService.delete(dietId, member);
    }
}
