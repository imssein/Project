package com.project.vegan.domain.post.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "post_uploadfile")
public class PostUploadFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_uploadfile_id")
    private Long id;
    private String originalFileName;
    private String savedFileName;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @Builder
    public PostUploadFile(String originalFileName, String savedFileName, Post post) {
        this.originalFileName = originalFileName;
        this.savedFileName = savedFileName;
        this.post = post;
    }
}
