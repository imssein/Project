package com.project.vegan.domain.like.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.common.dto.UploadFileDto;
import com.project.vegan.domain.like.entity.Like;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.store.entity.Menu;
import com.project.vegan.domain.store.entity.StoreUploadFile;
import com.project.vegan.domain.store.entity.VegetarianType;
import com.project.vegan.domain.store.response.StoreDetailDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class LikeStoreDto {
    private Long id;
    private MemberDto member;
    private StoreDetailDto store;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    @Builder
    public LikeStoreDto(Like like, List<VegetarianType> vegetarianTypes, List<Menu> menus, List<StoreUploadFile> uploadFiles) {
        this.id = like.getId();
        this.member = new MemberDto(like.getMember());
        this.store = new StoreDetailDto(like.getStore(), vegetarianTypes, menus, uploadFiles);
        this.createdTime = like.getCreatedTime();
        this.modifiedTime = like.getModifiedTime();
    }
}
