package com.project.vegan.domain.store.entity;

import com.project.vegan.domain.common.entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "store_uploadfile")
public class StoreUploadFile extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_uploadfile_id")
    private Long id;
    private String originalFileName;
    private String savedFileName;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @Builder
    public StoreUploadFile(String originalFileName, String savedFileName, Store store) {
        this.originalFileName = originalFileName;
        this.savedFileName = savedFileName;
        this.store = store;
    }
}
