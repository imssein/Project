package com.project.vegan.domain.diet.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import com.project.vegan.domain.member.entity.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Diet extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "diet_id")
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
    private String vegetarianType;
    private String type;
    private String amount;
    private String memo;

    @Builder
    public Diet(Member member, String vegetarianType, String type, String amount, String memo) {
        this.member = member;
        this.vegetarianType = vegetarianType;
        this.type = type;
        this.amount = amount;
        this.memo = memo;
    }

    public void change(String vegetarianType, String type, String amount, String memo){
        this.vegetarianType = vegetarianType;
        this.type = type;
        this.amount = amount;
        this.memo = memo;
    }
}
