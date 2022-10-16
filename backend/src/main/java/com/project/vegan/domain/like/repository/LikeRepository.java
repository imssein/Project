package com.project.vegan.domain.like.repository;

import com.project.vegan.domain.like.entity.Like;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.store.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long>, LikeRepositoryCustom {
    boolean existsByMemberAndPost(Member member, Post post);
    boolean existsByMemberAndStore(Member member, Store store);
    List<Like> findByPost(Post post);
}
