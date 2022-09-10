package com.project.vegan.domain.diet.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class DietSaveRequest {
    @NotEmpty
    private String vegetarianType;
    @NotEmpty
    private String type;
    @NotEmpty
    private String amount;
    @NotEmpty
    private String memo;
    private List<MultipartFile> multipartFiles = new ArrayList<>();

    @Builder
    public DietSaveRequest(String vegetarianType, String type, String amount, String memo, List<MultipartFile> multipartFiles) {
        this.vegetarianType = vegetarianType;
        this.type = type;
        this.amount = amount;
        this.memo = memo;
        this.multipartFiles = multipartFiles;
    }
}
