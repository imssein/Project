package com.project.vegan.domain.store.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import com.project.vegan.domain.review.entity.Review;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Store extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_id")
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Category category;
    private String address;
    @Enumerated(EnumType.STRING)
    private District district;
    private String phoneNumber;
    private Double starRating;
    private Integer likesNum;
    @OneToMany(mappedBy = "store")
    private List<Review> reviews = new ArrayList<>();
    @ElementCollection
    @CollectionTable(
            name = "menu",
            joinColumns = @JoinColumn(name = "store_id")
    )
    private List<String> menus = new ArrayList<>();
    @ElementCollection
    @CollectionTable(
            name = "vegetariantype",
            joinColumns = @JoinColumn(name = "store_id")
    )
    private List<String> vegetarianTypes;

    @Builder
    public Store(String name, Category category, String address, District district, String phoneNumber, Double starRating, Integer likesNum, List<Review> reviews, List<String> menus, List<String> vegetarianTypes) {
        this.name = name;
        this.category = category;
        this.address = address;
        this.district = district;
        this.phoneNumber = phoneNumber;
        this.starRating = starRating;
        this.likesNum = likesNum;
        this.reviews = reviews;
        this.menus = menus;
        this.vegetarianTypes = vegetarianTypes;
    }
}
