package com.project.vegan.domain.store.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.vegan.domain.store.entity.Category;
import com.project.vegan.domain.store.entity.District;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.VegetarianType;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class StoreDto {
    private Long id;
    private String name;
    private Category category;
    private String address;
    private District district;
    private String phoneNumber;
    private Double starRating;
    private Integer likesNum;
    private Integer reviewCount;
    private String vegetarianTypes;
    private List<Double> coords;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime createdTime;
    @JsonFormat(pattern = "yyyy년 MM월 dd일")
    private LocalDateTime modifiedTime;

    @Builder
    public StoreDto(Store store, List<VegetarianType> vegetarianTypes) {
        this.id = store.getId();
        this.name = store.getName();
        this.category = store.getCategory();
        this.address = store.getAddress();
        this.district = store.getDistrict();
        this.phoneNumber = store.getPhoneNumber();
        this.starRating = store.getStarRating();
        this.likesNum = store.getLikesNum();
        this.reviewCount = store.getReviews().size();
        this.vegetarianTypes = getStringFromVegetarianTypes(vegetarianTypes);
        this.coords = List.of(store.getX(), store.getY());
        this.createdTime = store.getCreatedTime();
        this.modifiedTime = store.getModifiedTime();
    }

    private String getStringFromVegetarianTypes(List<VegetarianType> vegetarianTypes){
        String result = "";

        for(VegetarianType vegetarianType : vegetarianTypes){
            result += vegetarianType.getValue() + ",";
        }

        return result.substring(0, result.length() - 1);
    }
}
