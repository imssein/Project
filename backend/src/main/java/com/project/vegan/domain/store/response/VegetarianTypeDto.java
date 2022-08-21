package com.project.vegan.domain.store.response;

import com.project.vegan.domain.store.entity.VegetarianType;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class VegetarianTypeDto {
    private Long id;
    private String vegetarianType;

    @Builder
    public VegetarianTypeDto(VegetarianType vegetarianType) {
        this.id = vegetarianType.getId();
        this.vegetarianType = vegetarianType.getVegetarianType();
    }
}
