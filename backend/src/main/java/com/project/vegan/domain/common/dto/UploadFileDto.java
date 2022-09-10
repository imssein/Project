package com.project.vegan.domain.common.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.diet.entity.DietUploadFile;
import com.project.vegan.domain.post.entity.PostUploadFile;
import com.project.vegan.domain.review.entity.ReviewUploadFile;
import com.project.vegan.domain.store.entity.StoreUploadFile;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
public class UploadFileDto {
    private Long id;
    private String originalFileName;
    private String savedFileName;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    public UploadFileDto(PostUploadFile uploadFile) {
        this.id = uploadFile.getId();
        this.originalFileName = uploadFile.getOriginalFileName();
        this.savedFileName = uploadFile.getSavedFileName();
        this.createdTime = uploadFile.getCreatedTime();
        this.modifiedTime = uploadFile.getModifiedTime();
    }

    public UploadFileDto(DietUploadFile uploadFile) {
        this.id = uploadFile.getId();
        this.originalFileName = uploadFile.getOriginalFileName();
        this.savedFileName = uploadFile.getSavedFileName();
        this.createdTime = uploadFile.getCreatedTime();
        this.modifiedTime = uploadFile.getModifiedTime();
    }

    public UploadFileDto(StoreUploadFile uploadFile) {
        this.id = uploadFile.getId();
        this.originalFileName = uploadFile.getOriginalFileName();
        this.savedFileName = uploadFile.getSavedFileName();
        this.createdTime = uploadFile.getCreatedTime();
        this.modifiedTime = uploadFile.getModifiedTime();
    }

    public UploadFileDto(ReviewUploadFile uploadFile) {
        this.id = uploadFile.getId();
        this.originalFileName = uploadFile.getOriginalFileName();
        this.savedFileName = uploadFile.getSavedFileName();
        this.createdTime = uploadFile.getCreatedTime();
        this.modifiedTime = uploadFile.getModifiedTime();
    }
}
