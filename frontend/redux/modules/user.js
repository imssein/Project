import axios from "axios";

// 액션 타입 정의
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export function loginAction({email, password}) {
    return {
        type: LOG_IN,
        email,
        password,
    };
}

export function logoutAction(){
    return {
        type: LOG_OUT,
    }
}

const initialState = {
    isLoggedIn: false, 
    user: null, 
    signUpData: {},
    loginData: {},
};

export default function reducer(state = initialState, action){
    switch(action.type){
        default: 
            return state;
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user:null,
            }
    }
}

// 로그인
export  const getLogin = (user) => {
    return async(dispatch, getState) => {
        try{ 
            const res = await axios.post("http://localhost:9090/v1/api/members/login");
            dispatch(loginAction(email, password));
        } catch(error){
            dispatch(get)
        }
    }
}