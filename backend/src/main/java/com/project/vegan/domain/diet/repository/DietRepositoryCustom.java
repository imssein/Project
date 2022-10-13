package com.project.vegan.domain.diet.repository;

import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.member.entity.Member;

import java.time.LocalDateTime;
import java.util.List;

public interface DietRepositoryCustom {
    List<Diet> findAllFetch(LocalDateTime localDateTime, Member member);
    Diet findByIdFetch(Long dietId);
}
