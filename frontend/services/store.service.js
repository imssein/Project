import axios from 'axios';
const API_URL = "http://localhost:9090/v1/api/stores/";

//전체 맛집 조회 


//지역에 따른 맛집 조회
const getStoreDistrict = ({params}) => {
    return axios.get(API_URL + `${params}`);
}

//맛집 상세 조회 
const getStoreDetail = ({id}) => {
    return axios.get(API_URL + `${id}`);
}

const StoreService = {
    getStoreDistrict,
    getStoreDetail,
};

export default StoreService;

