package com.project.vegan.domain.store.entity;

public enum Category {
    한식("한식"),
    양식("양식"),
    중식("중식"),
    일식("일식"),
    분식("분식"),
    베이커리("베이커리"),
    카페("카페"),
    인도("인도"),
    동남아("동남아");

    private String districtValue;

    Category(String districtValue) {
        this.districtValue = districtValue;
    }

    public static boolean check(String str){
        if( str == null ){
            return false;
        }else if( str.isBlank() ){
            return false;
        }

        for(Category district : Category.values()){
            if( district.districtValue.equals(str) ){
                return true;
            }
        }

        return false;
    }
}
