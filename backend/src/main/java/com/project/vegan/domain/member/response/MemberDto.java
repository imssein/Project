package com.project.vegan.domain.member.response;

import com.project.vegan.domain.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class MemberDto {
    private Long id;
    private String name;
    private String nickname;
    private String vegetarianType;

    @Builder
    public MemberDto(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.nickname = member.getNickname();
        this.vegetarianType = member.getVegetarianType();
    }
}
