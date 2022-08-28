import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mapLists =  [
    { alt : "강서구", title : "강서구", coords : "62,142,51,153,56,159,32,187,25,202,48,216,65,219,79,224,86,214,97,237,121,234,124,213,138,213", url: "/seoul/gangseo"},
    { alt : "양천구", title : "양천구", coords : "80,225,82,257,94,269,117,262,131,267,137,250,147,235,139,218,128,216,124,234,97,239,87,218", url: "/seoul/yangcheon"},
    { alt : "양천구", title : "노원구", coords : "322,43,321,62,323,100,313,111,331,131,357,127,377,124,377,105,363,68,363,53,362,39,349,29" , url: "/seoul/nowon"},
    { alt : "도봉구", title : "도봉구", coords : "278,23,272,43,283,61,282,85,308,109,317,94,318,44" , url: "/seoul/dobong"},
    { alt : "강북구", title : "강북구", coords : "268,47,258,64,252,100,298,136,314,121,283,86" , url: "/seoul/gangbuk"},
    { alt : "성북구", title : "성북구", coords : "249,106,252,140,243,151,260,158,288,174,308,155,333,141,317,124,294,146", url: "/seoul/seongbuk"},
    { alt : "종로구", title : "종로구", coords : "237,110,214,119,213,141,220,153,222,168,221,178,231,189,239,186,285,185,268,167,239,154,248,138", url: "/seoul/jongro"},
    { alt : "중랑구", title : "중랑구", coords : "341,134,339,156,348,184,369,183,378,171,382,161,383,152,382,126", url: "/seoul/jungnang"},
    { alt : "은평구", title : "은평구", coords : "210,75,197,85,175,94,171,104,168,119,161,131,159,157,156,164,160,174,172,165,184,167,194,155,203,144,209,138,210,117,222,109", url: "/seoul/eunpyeong"},
    { alt : "서대문구", title : "서대문구", coords : "166,178,182,189,195,202,230,197,218,180,213,142,193,163", url: "/seoul/seodaemun"},
    { alt : "마포구", title : "마포구", coords : "140,161,136,172,120,178,148,200,214,224,220,216,221,206,196,207", url: "/seoul/mapo"},
    { alt : "동대문구", title : "동대문구", coords : "335,160,335,147,310,158,292,176,294,186,307,183,323,195,337,198,345,188", url: "/seoul/dongdaemun"},
    { alt : "광진구", title : "광진구", coords : "347,191,343,200,339,211,326,234,358,233,372,221,378,205,371,197,371,187", url: "/seoul/gwangjin"},
    { alt : "성동구", title : "성동구", coords : "295,192,277,215,281,227,299,222,323,232,338,203", url: "/seoul/seongdong"},
    { alt : "중구", title : "중구", coords : "236,192,232,202,261,209,279,205,287,191", url: "/seoul/junggu"},
    { alt : "용산구", title : "용산구", coords : "230,211,219,231,225,252,245,257,278,230,269,220", url: "/seoul/yongsan"},
    { alt : "영등포구", title : "영등포구", coords : "150,221,153,233,144,249,153,259,161,288,180,273,186,254,206,250,205,234", url: "/seoul/yeongdeungpo"},
    { alt : "강동구", title : "강동구", coords : "394,200,391,217,399,227,398,238,414,249,431,219,452,216,444,178", url: "/seoul/gangdong"},
    { alt : "송파구", title : "송파구", coords : "382,231,411,255,413,267,429,274,395,309,377,284,341,269,345,256", url: "/seoul/songpa"},
    { alt : "강남구", title : "강남구", coords : "286,244,329,250,335,272,373,286,387,312,365,323,356,304,344,303,320,311,312,294,297,288", url: "/seoul/gangnam"},
    { alt : "서초구", title : "서초구", coords : "273,252,252,273,249,304,254,319,267,311,277,329,293,318,306,345,321,356,334,346,354,336,360,323,351,311,321,322,310,310", url: "/seoul/seocho"},
    { alt : "동작구", title : "동작구", coords : "209,258,192,258,186,276,219,279,234,298,243,284,243,272", url: "/seoul/dongjak"},
    { alt : "관악구", title : "관악구", coords : "193,287,176,296,177,318,191,332,204,351,222,343,245,321,243,306,230,305,220,289", url: "/seoul/gwanak"},
    { alt : "금천구", title : "금천구", coords : "137,297,153,329,170,353,184,335,172,323,166,303", url: "/seoul/geumcheon"},
    { alt : "구로구", title : "구로구", coords : "82,266,75,278,79,301,101,299,123,281,133,285,157,290,149,265,123,268,94,271", url: "/seoul/guro"},
  ];

function SeoulMap() {
    return (
        <div className='flex justify-center py-6'>
            <img src="https://www.seoul.go.kr/res_newseoul/images/seoul/seoul_map.gif"  useMap="#image-map" alt="서울시 지도" />
            <map name="image-map">
            {mapLists.map((item, index) => (
                <Link key={index} href={item.url}>
                    <area target=""alt={item.alt} title={item.title} coords={item.coords} shape="poly" />                    
                </Link>
            ))} 
            </map>
        </div>
    );
}

export default SeoulMap;