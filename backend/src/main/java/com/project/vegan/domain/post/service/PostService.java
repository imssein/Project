package com.project.vegan.domain.post.service;

import com.project.vegan.domain.common.service.UploadFileService;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.post.entity.HashTag;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.post.entity.PostUploadFile;
import com.project.vegan.domain.post.repository.HashTagRepository;
import com.project.vegan.domain.post.repository.PostRepository;
import com.project.vegan.domain.post.repository.PostUploadFileRepository;
import com.project.vegan.domain.post.request.PostSaveRequest;
import com.project.vegan.domain.post.response.PostDto;
import com.project.vegan.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.common.service.UploadFileTypeConstants.POST_TYPE;

@Service
@RequiredArgsConstructor
@Transactional
public class PostService {
    private final PostRepository postRepository;
    private final HashTagRepository hashTagRepository;
    private final PostUploadFileRepository postUploadFileRepository;
    private final UploadFileService uploadFileService;

    public List<PostDto> getPosts(String hashTag) {
        List<HashTag> hashTags = hashTagRepository.findAllFetch();
        List<PostUploadFile> uploadFiles = postUploadFileRepository.findAllFetch();

        if (hashTag == null || hashTag.isBlank()) {
            /**
             * 쿼리가 계속 나가지 않도록
             * hashTagRepository.findByPost 을 쓰지않고
             * stream 으로 처리에서 넣어줌
             */
            return postRepository.findAllFetch()
                    .stream()
                    .map(p -> new PostDto(p,
                            hashTags
                                    .stream()
                                    .filter(h -> h.getPost().getId() == p.getId())
                                    .distinct()
                                    .collect(Collectors.toList()),
                            uploadFiles
                                    .stream()
                                    .filter(u -> u.getPost().getId() == p.getId())
                                    .distinct()
                                    .collect(Collectors.toList())))
                    .collect(Collectors.toList());
        }

        return postRepository.findByHashTag(hashTag)
                .stream()
                .map(p -> new PostDto(p,
                        hashTags
                                .stream()
                                .filter(h -> h.getPost().getId() == p.getId())
                                .distinct()
                                .collect(Collectors.toList()),
                        uploadFiles
                                .stream()
                                .filter(u -> u.getPost().getId() == p.getId())
                                .distinct()
                                .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public PostDto getPost(Long postId){
        Post post = postRepository.findByIdFetch(postId);

        return new PostDto(post, hashTagRepository.findByPost(post), postUploadFileRepository.findByPost(post));
    }

    public PostDto post(PostSaveRequest postSaveRequest, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        Post post = Post.builder()
                .title(postSaveRequest.getTitle())
                .content(postSaveRequest.getContent())
                .member(member)
                .build();

        Post save = postRepository.save(post);

        List<HashTag> hashTags = getHashTagList(postSaveRequest.getHashTags(), post);
        hashTagRepository.saveAll(hashTags);

        postSaveRequest.getMultipartFiles()
                .stream()
                .forEach(f -> uploadFileService.saveFile(f, POST_TYPE, save.getId()));

        return new PostDto(save, hashTags, postUploadFileRepository.findByPost(save));
    }

    public PostDto update(PostSaveRequest postSaveRequest, Member member, Long postId){
        if(member == null){
            throw new ForbiddenException();
        }

        Post post = postRepository.findByIdFetch(postId);

        if(post.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        post.change(postSaveRequest.getTitle(), postSaveRequest.getContent());

        hashTagRepository.deleteAll(hashTagRepository.findByPost(post));

        List<HashTag> hashTags = getHashTagList(postSaveRequest.getHashTags(), post);
        hashTagRepository.saveAll(hashTags);

        postUploadFileRepository.deleteAll(postUploadFileRepository.findByPost(post));

        postSaveRequest.getMultipartFiles()
                .stream()
                .forEach(f -> uploadFileService.saveFile(f, POST_TYPE, post.getId()));

        return new PostDto(post, hashTags, postUploadFileRepository.findByPost(post));
    }

    public void delete(Long postId, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        Post post = postRepository.findByIdFetch(postId);

        if(post.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        hashTagRepository.deleteAll(hashTagRepository.findByPost(post));

        if(postUploadFileRepository.existsByPost(post)){
            postUploadFileRepository.deleteAll(postUploadFileRepository.findByPost(post));
        }

        postRepository.delete(post);
    }

    private List<HashTag> getHashTagList(List<String> stringList, Post post){
        List<HashTag> hashTags = new ArrayList<>();

        for(String s : stringList){
            hashTags.add(HashTag.builder()
                    .post(post)
                    .value(s)
                    .build());
        }

        return hashTags;
    }
}
