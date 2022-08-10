package com.project.vegan.domain.review.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "review_uploadfile")
public class ReviewUploadFile {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_uploadfile_id")
    private Long id;
    private String originalFileName;
    private String savedFileName;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_id")
    private Review review;

    @Builder
    public ReviewUploadFile(String originalFileName, String savedFileName, Review review) {
        this.originalFileName = originalFileName;
        this.savedFileName = savedFileName;
        this.review = review;
    }
}
