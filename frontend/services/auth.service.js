import axios from "axios";
const API_URL = "http://localhost:9090/v1/api/members/";

const register = (email, name, nickname, password, vegetarianType) => {
  return axios.post(API_URL + "join" , {
    email,
    name,
    nickname,
    password,
    vegetarianType,
  })
} 

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logOut = () => {
  localStorage.removeItem("user");
  window.location.replace('/'); 
  console.log("로그아웃")
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


const AuthService = {
  register,
  login,
  logOut,
  getCurrentUser,
};

export default AuthService;
