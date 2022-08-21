package com.project.vegan.domain.store.response;

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
    private LocalDateTime createdTime;
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
            result += vegetarianType.getVegetarianType() + ",";
        }

        return result.substring(0, result.length() - 1);
    }
}
