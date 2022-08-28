package com.project.vegan.domain.store.response;

import com.project.vegan.domain.store.entity.Menu;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class MenuDto {
    private Long id;
    private String menu;

    @Builder
    public MenuDto(Menu menu) {
        this.id = menu.getId();
        this.menu = menu.getValue();
    }
}
