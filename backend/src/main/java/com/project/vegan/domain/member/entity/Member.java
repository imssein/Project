package com.project.vegan.domain.member.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;
    @Column(unique = true) // 유니크 인덱스 자동으로 생성됨
    private String email;
    private String password;
    private String name;
    private String nickname;
    private String role;
    private String vegetarianType; // 한개

    @Builder
    public Member(String email, String password, String name, String nickname, String role, String vegetarianType) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.role = role;
        this.vegetarianType = vegetarianType;
    }
}
