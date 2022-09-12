package com.project.vegan.domain.diet.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@NoArgsConstructor
@Getter
@Setter
public class DietRequest {
    @NotEmpty
    private String vegetarianType;
    @NotEmpty
    private String type;
    @NotEmpty
    private String amount;
    @NotEmpty
    private String memo;

    @Builder
    public DietRequest(String vegetarianType, String type, String amount, String memo) {
        this.vegetarianType = vegetarianType;
        this.type = type;
        this.amount = amount;
        this.memo = memo;
    }
}