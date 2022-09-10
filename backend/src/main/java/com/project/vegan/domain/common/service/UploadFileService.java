package com.project.vegan.domain.common.service;

import com.project.vegan.domain.common.exception.FileUploadException;
import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.diet.entity.DietUploadFile;
import com.project.vegan.domain.diet.repository.DietRepository;
import com.project.vegan.domain.diet.repository.DietUploadFileRepository;
import com.project.vegan.domain.post.entity.Post;
import com.project.vegan.domain.post.entity.PostUploadFile;
import com.project.vegan.domain.post.repository.PostRepository;
import com.project.vegan.domain.post.repository.PostUploadFileRepository;
import com.project.vegan.domain.review.entity.Review;
import com.project.vegan.domain.review.entity.ReviewUploadFile;
import com.project.vegan.domain.review.repository.ReviewRepository;
import com.project.vegan.domain.review.repository.ReviewUploadFileRepository;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.StoreUploadFile;
import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.domain.store.repository.StoreUploadFileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

import static com.project.vegan.domain.common.service.UploadFileTypeConstants.*;
import static com.project.vegan.domain.common.service.UploadFileTypeConstants.REVIEW_TYPE;

@Service
@RequiredArgsConstructor
public class UploadFileService {
    @Value("${file.dir}")
    private String fileDir;
    private final PostUploadFileRepository postUploadFileRepository;
    private final StoreUploadFileRepository storeUploadFileRepository;
    private final DietUploadFileRepository dietUploadFileRepository;
    private final ReviewUploadFileRepository reviewUploadFileRepository;
    private final PostRepository postRepository;
    private final StoreRepository storeRepository;
    private final DietRepository dietRepository;
    private final ReviewRepository reviewRepository;

    public String getFullPath(String filename){
        return fileDir + filename;
    }

    public String createSavedFileName(String originalFilename){
        String ext = extractExt(originalFilename);
        String uuid = UUID.randomUUID().toString();
        return uuid + "." + ext;
    }

    public String extractExt(String originalFilename){
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }

    public Long saveFile(MultipartFile multipartFile, String type, Long id) {
        if(multipartFile == null || multipartFile.isEmpty()){
            return -1L;
        }

        String originalFilename = multipartFile.getOriginalFilename();
        String savedFileName = createSavedFileName(originalFilename);
        transferTo(multipartFile, savedFileName);

        if(STORE_TYPE.equals(type)){
            Store store = storeRepository.findByIdFetch(id);
            StoreUploadFile storeUploadFile = StoreUploadFile.builder()
                    .originalFileName(originalFilename)
                    .savedFileName(savedFileName)
                    .store(store)
                    .build();

            StoreUploadFile save = storeUploadFileRepository.save(storeUploadFile);

            return save.getId();
        }else if(POST_TYPE.equals(type)){
            Post post = postRepository.findByIdFetch(id);
            PostUploadFile postUploadFile = PostUploadFile.builder()
                    .originalFileName(originalFilename)
                    .savedFileName(savedFileName)
                    .post(post)
                    .build();

            PostUploadFile save = postUploadFileRepository.save(postUploadFile);

            return save.getId();
        }else if(DIET_TYPE.equals(type)){
            Diet diet = dietRepository.findByIdFetch(id);
            DietUploadFile dietUploadFile = DietUploadFile.builder()
                    .originalFileName(originalFilename)
                    .savedFileName(savedFileName)
                    .diet(diet)
                    .build();

            DietUploadFile save = dietUploadFileRepository.save(dietUploadFile);

            return save.getId();
        }else if(REVIEW_TYPE.equals(type)){
            Review review = reviewRepository.findByIdFetch(id);
            ReviewUploadFile reviewUploadFile = ReviewUploadFile.builder()
                    .originalFileName(originalFilename)
                    .savedFileName(savedFileName)
                    .review(review)
                    .build();

            ReviewUploadFile save = reviewUploadFileRepository.save(reviewUploadFile);

            return save.getId();
        }else{
            return -1L;
        }
    }

    private void transferTo(MultipartFile multipartFile, String savedFileName) {
        try{
            multipartFile.transferTo(new File(getFullPath(savedFileName)));
        } catch (Exception e) {
            throw new FileUploadException();
        }
    }
}
