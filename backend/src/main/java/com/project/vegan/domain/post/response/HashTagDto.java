package com.project.vegan.domain.post.response;

import com.project.vegan.domain.post.entity.HashTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class HashTagDto {
    private Long id;
    private String value;

    public HashTagDto(HashTag hashTag) {
        this.id = hashTag.getId();
        this.value = hashTag.getValue();
    }
}
