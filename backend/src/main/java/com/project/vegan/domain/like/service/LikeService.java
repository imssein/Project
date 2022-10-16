package com.project.vegan.domain.like.service;

import com.project.vegan.domain.like.entity.Like;
import com.project.vegan.domain.like.repository.LikeRepository;
import com.project.vegan.domain.like.response.LikePostDto;
import com.project.vegan.domain.like.response.LikeStoreDto;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.post.repository.HashTagRepository;
import com.project.vegan.domain.post.repository.PostRepository;
import com.project.vegan.domain.post.repository.PostUploadFileRepository;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.repository.MenuRepository;
import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.domain.store.repository.StoreUploadFileRepository;
import com.project.vegan.domain.store.repository.VegetarianTypeRepository;
import com.project.vegan.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class LikeService {
    private final LikeRepository likeRepository;
    private final StoreRepository storeRepository;
    private final VegetarianTypeRepository vegetarianTypeRepository;
    private final MenuRepository menuRepository;
    private final PostRepository postRepository;
    private final HashTagRepository hashTagRepository;
    private final PostUploadFileRepository postUploadFileRepository;
    private final StoreUploadFileRepository storeUploadFileRepository;

    public List<?> getLikes(String type, Member member){
        return likeRepository.findByMemberFetch(member)
                .stream()
                .filter(getLikePredicate(type))
                .map(getLikeObjectFunction(type))
                .collect(Collectors.toList());
    }

    private Predicate<Like> getLikePredicate(String type) {
        return l -> {
            if (type.equals("post")) {
                return l.getStore() == null;
            } else if (type.equals("store")) {
                return l.getPost() == null;
            }
            throw new IllegalArgumentException();
        };
    }

    private Function<Like, Object> getLikeObjectFunction(String type) {
        return l -> {
            if (type.equals("post")) {
                return new LikePostDto(l,
                        hashTagRepository.findByPost(l.getPost()),
                        postUploadFileRepository.findByPost(l.getPost()));
            } else if (type.equals("store")) {
                return new LikeStoreDto(l,
                        vegetarianTypeRepository.findByStore(l.getStore()),
                        menuRepository.findByStore(l.getStore()),
                        storeUploadFileRepository.findByStore(l.getStore()));
            }
            throw new IllegalArgumentException();
        };
    }

    public void deleteLike(Long likeId, String type, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        Like like = likeRepository.findByIdFetch(likeId);

        if(like.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        if(type.equals("post")){
            Post post = postRepository.findByIdFetch(like.getPost().getId());
            post.changeLikesNum(-1);
        } else if (type.equals("store")){
            Store store = storeRepository.findByIdFetch(like.getStore().getId());
            store.changeLikesNum(-1);
        }

        likeRepository.delete(like);
    }

    public Object addLike(Long id, String type, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        if(type.equals("post")){
            Post post = postRepository.findByIdFetch(id);

            if(likeRepository.existsByMemberAndPost(member, post)){
                throw new IllegalArgumentException();
            }

            Like like = Like.builder()
                    .post(post)
                    .member(member)
                    .build();

            Like save = likeRepository.save(like);

            post.changeLikesNum(1);

            return new LikePostDto(save,
                    hashTagRepository.findByPost(post),
                    postUploadFileRepository.findByPost(post));
        }else if(type.equals("store")){
            Store store = storeRepository.findByIdFetch(id);

            if(likeRepository.existsByMemberAndStore(member, store)){
                throw new IllegalArgumentException();
            }

            Like like = Like.builder()
                    .store(store)
                    .member(member)
                    .build();

            Like save = likeRepository.save(like);

            store.changeLikesNum(1);

            return new LikeStoreDto(save,
                    vegetarianTypeRepository.findByStore(store),
                    menuRepository.findByStore(store),
                    storeUploadFileRepository.findByStore(store));
        }

        throw new IllegalArgumentException();
    }

    private boolean isAccessible(Member likeMember, Member loginMember){
        if(likeMember.getId() == loginMember.getId()){
            return true;
        }
        return false;
    }
}
