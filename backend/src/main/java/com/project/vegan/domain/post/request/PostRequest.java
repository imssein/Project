package com.project.vegan.domain.post.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class PostRequest {
    @NotEmpty
    private String title;
    @NotEmpty
    private String content;
    private List<String> hashTags = new ArrayList<>();

    @Builder
    public PostRequest(String title, String content, List<String> hashTags) {
        this.title = title;
        this.content = content;
        this.hashTags = hashTags;
    }
}
