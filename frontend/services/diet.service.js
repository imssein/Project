import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9090/v1/api/diets";

// 식단 저장
const createDiet = async (vegetarianType, amount, memo, type) => {
  const response = await axios.post(
    API_URL + "/diet",
    {
      vegetarianType,
      amount,
      memo,
      type,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
};

// 식단 목록 조회
const getDietsList = async () => {
  const response = await axios.get(API_URL, { headers: authHeader() });
  return response.data;
};

// 식단 디테일 조회
const detailDiet = async (params) => {
    const response = await axios.get(API_URL + `/${params}` , 
    {
        headers: authHeader()
    });

    return response.data;
}

// 식단 삭제 
const deleteDiet = async (id) => {
    return axios.delete(API_URL + `/${id}`, { headers: authHeader() });
}

// 식단 수정 
const editDiet = async (id, vegetarianType, amount, memo, type ) => {
  const response = await axios.post(
    API_URL + `/${id}`,
    {
      vegetarianType,
      amount,
      memo,
      type,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
}


const DietService = {
  createDiet,
  getDietsList,
  detailDiet,
  deleteDiet,
  editDiet,
};

export default DietService;
