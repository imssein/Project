package com.project.vegan.domain.diet.service;

import com.project.vegan.domain.diet.entity.Diet;
import com.project.vegan.domain.diet.repository.DietRepository;
import com.project.vegan.domain.diet.request.DietSaveRequest;
import com.project.vegan.domain.diet.response.DietDto;
import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class DietService {
    private final DietRepository dietRepository;

    public List<DietDto> getDiets(){
        return dietRepository.findAllFetch()
                .stream()
                .map(DietDto::new)
                .collect(Collectors.toList());
    }

    public DietDto getDiet(Long dietId){
        Diet diet = dietRepository.findByIdFetch(dietId);

        return new DietDto(diet);
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

        return new DietDto(save);
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

        return new DietDto(diet);
    }

    public void delete(Long dietId, Member member){
        if(member == null){
            throw new ForbiddenException();
        }

        Diet diet = dietRepository.findByIdFetch(dietId);

        if(diet.getMember().getId() != member.getId()){
            throw new ForbiddenException();
        }

        dietRepository.delete(diet);
    }
}
