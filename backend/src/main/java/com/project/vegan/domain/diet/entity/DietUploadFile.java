package com.project.vegan.domain.diet.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "diet_uploadfile")
public class DietUploadFile extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "diet_uploadfile_id")
    private Long id;
    private String originalFileName;
    private String savedFileName;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diet_id")
    private Diet diet;

    @Builder
    public DietUploadFile(String originalFileName, String savedFileName, Diet diet) {
        this.originalFileName = originalFileName;
        this.savedFileName = savedFileName;
        this.diet = diet;
    }
}
