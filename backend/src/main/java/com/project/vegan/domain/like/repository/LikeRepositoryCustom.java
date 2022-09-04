package com.project.vegan.domain.like.repository;

import com.project.vegan.domain.like.entity.Like;
import com.project.vegan.domain.member.entity.Member;

import java.util.List;

public interface LikeRepositoryCustom {
    Like findByIdFetch(Long likeId);
    List<Like> findByMemberFetch(Member member);
}
