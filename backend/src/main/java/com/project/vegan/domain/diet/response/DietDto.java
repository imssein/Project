package com.project.vegan.domain.diet.response;

import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.post.response.HashTagDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class DietDto {
    private Long id;
    private MemberDto member;
    private String type;
    private String amount;
    private String memo;
    private LocalDateTime createdTime;
    private LocalDateTime modifiedTime;

    public DietDto(Diet diet) {
        this.id = diet.getId();
        this.member = new MemberDto(diet.getMember());
        this.type = diet.getType();
        this.amount = diet.getAmount();
        this.memo = diet.getMemo();
        this.createdTime = diet.getCreatedTime();
        this.modifiedTime = diet.getModifiedTime();
    }
}
