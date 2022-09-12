package com.project.vegan.domain.post.repository;

import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.post.entity.PostUploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostUploadFileRepository extends JpaRepository<PostUploadFile, Long>, PostUploadFileRepositoryCustom {
    List<PostUploadFile> findByPost(Post post);
    boolean existsByPost(Post post);
}
