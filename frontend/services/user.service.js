import axios from 'axios';
import authHeader from './auth-header copy';
const API_URL = "http://localhost:9090/v1/api/members/";

// 회원 상세 정보 조회
const getMemberDetail = () => {
  console.log("auth", authHeader())
  return axios.get(API_URL + "me", { headers: authHeader() });
}
const UserService = {
  getMemberDetail,
};

export default UserService;