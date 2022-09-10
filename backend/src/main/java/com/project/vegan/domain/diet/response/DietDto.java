package com.project.vegan.domain.diet.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.common.dto.UploadFileDto;
import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.diet.entity.DietUploadFile;
import com.project.vegan.domain.member.response.MemberDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class DietDto {
    private Long id;
    private MemberDto member;
    private String vegetarianType;
    private String type;
    private String amount;
    private String memo;
    private List<UploadFileDto> uploadFiles = new ArrayList<>();
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    public DietDto(Diet diet, List<DietUploadFile> dietUploadFiles) {
        this.id = diet.getId();
        this.member = new MemberDto(diet.getMember());
        this.vegetarianType = diet.getVegetarianType();
        this.type = diet.getType();
        this.amount = diet.getAmount();
        this.memo = diet.getMemo();
        this.uploadFiles = dietUploadFiles.stream().map(UploadFileDto::new).collect(Collectors.toList());
        this.createdTime = diet.getCreatedTime();
        this.modifiedTime = diet.getModifiedTime();
    }
}
