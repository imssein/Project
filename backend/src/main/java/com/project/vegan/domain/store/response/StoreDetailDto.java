package com.project.vegan.domain.store.response;

import com.project.vegan.domain.review.response.ReviewDto;
import com.project.vegan.domain.store.entity.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class StoreDetailDto {
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
    private String menus;
    private List<ReviewDto> reviews;
    private List<Double> coords;
    private LocalDateTime createdTime;
    private LocalDateTime modifiedTime;

    @Builder
    public StoreDetailDto(Store store, List<VegetarianType> vegetarianTypes, List<Menu> menus) {
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
        this.menus = getStringFromMenus(menus);
        // 지연로딩예외 조심하자
        this.reviews = store.getReviews()
                .stream()
                .map(ReviewDto::new)
                .collect(Collectors.toList());
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

    private String getStringFromMenus(List<Menu> menus){
        String result = "";

        for(Menu menu : menus){
            result += menu.getValue() + ",";
        }

        return result.substring(0, result.length() - 1);
    }
}
