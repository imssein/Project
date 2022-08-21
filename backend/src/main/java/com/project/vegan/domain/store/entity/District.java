package com.project.vegan.domain.store.entity;

import lombok.Getter;

@Getter
public enum District {
    노원구("nowon"),
    강서구("gangseo"),
    양천구("yangcheon"),
    도봉구("dobong"),
    강북구("gangbuk"),
    성북구("seongbuk"),
    동대문구("dongdaemun"),
    종로구("jongro"),
    중랑구("jungnang"),
    은평구("eunpyeong"),
    서대문구("seodaemun"),
    마포구("mapo"),
    광진구("gwangjin"),
    성동구("seongdong"),
    중구("junggu"),
    용산구("yongsan"),
    영등포구("yeongdeungpo"),
    강동구("gangdong"),
    송파구("songpa"),
    강남구("gangnam"),
    서초구("seocho"),
    동작구("dongjak"),
    관악구("gwanak"),
    구로구("guro"),
    금천구("geumcheon");

    private String districtValue;

    District(String districtValue) {
        this.districtValue = districtValue;
    }

    // 변환가능한지 체크하는 함수
    public static boolean check(String str){
        if( str == null ){
            return false;
        }else if( str.isBlank() ){
            return false;
        }

        for(District district : District.values()){
            if( district.districtValue.equals(str) ){
                return true;
            }
        }

        return false;
    }
}
