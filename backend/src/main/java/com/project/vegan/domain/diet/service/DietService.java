package com.project.vegan.domain.diet.service;

import com.project.vegan.domain.common.service.UploadFileService;
import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.diet.entity.DietUploadFile;
import com.project.vegan.domain.diet.repository.DietRepository;
import com.project.vegan.domain.diet.repository.DietUploadFileRepository;
import com.project.vegan.domain.diet.request.DietSaveRequest;
import com.project.vegan.domain.diet.response.DietDto;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.common.service.UploadFileTypeConstants.DIET_TYPE;

@Service
@RequiredArgsConstructor
@Transactional
public class DietService {
    private final DietRepository dietRepository;
    private final DietUploadFileRepository dietUploadFileRepository;
    private final UploadFileService uploadFileService;

    public List<DietDto> getDiets(LocalDateTime date){
        return dietRepository.findAllFetch(date)
                .stream()
                .map(d -> new DietDto(d, dietUploadFileRepository.findAllFetch()
                        .stream()
                        .filter(u -> u.getDiet().getId() == d.getId())
                        .distinct()
                        .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public DietDto getDiet(Long dietId){
        Diet diet = dietRepository.findByIdFetch(dietId);
        List<DietUploadFile> uploadFiles = dietUploadFileRepository.findByDiet(diet);

        return new DietDto(diet, uploadFiles);
    }

    public DietDto save(DietSaveRequest dietSaveRequest, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        Diet diet = Diet.builder()
                .member(member)
                .vegetarianType(dietSaveRequest.getVegetarianType())
                .type(dietSaveRequest.getType())
                .amount(dietSaveRequest.getAmount())
                .memo(dietSaveRequest.getMemo())
                .build();

        Diet save = dietRepository.save(diet);

        dietSaveRequest.getMultipartFiles()
                .stream()
                .forEach(f -> uploadFileService.saveFile(f, DIET_TYPE, save.getId()));

        return new DietDto(save, dietUploadFileRepository.findByDiet(save));
    }

    public DietDto update(DietSaveRequest dietSaveRequest, Member member, Long dietId){
        if(member == null){
            throw new ForbiddenException();
        }

        Diet diet = dietRepository.findByIdFetch(dietId);

        if(diet.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        diet.change(dietSaveRequest.getVegetarianType(), dietSaveRequest.getType(), dietSaveRequest.getAmount(), dietSaveRequest.getMemo());

        dietUploadFileRepository.deleteAll(dietUploadFileRepository.findByDiet(diet));

        dietSaveRequest.getMultipartFiles()
                .stream()
                .forEach(f -> uploadFileService.saveFile(f, DIET_TYPE, diet.getId()));

        return new DietDto(diet, dietUploadFileRepository.findByDiet(diet));
    }

    public void delete(Long dietId, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        Diet diet = dietRepository.findByIdFetch(dietId);

        if(diet.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        if(dietUploadFileRepository.existsByDiet(diet)){
            dietUploadFileRepository.deleteAll(dietUploadFileRepository.findByDiet(diet));
        }

        dietRepository.delete(diet);
    }
}
