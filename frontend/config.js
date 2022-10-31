//const BASE_URL = 'http://localhost:9090/v1/api';            //개발
const BASE_URL = 'http://3.39.140.31:8080/v1/api';       //배포

export const DIET = {
    DIETSLIST: `${BASE_URL}/diets`,
    DIET_POST: `${BASE_URL}/diets/diet`,
};
export const LIKE = {
    LIKE_LIST: `${BASE_URL}/likes`,
};
export const POST = {
    POST_LIST: `${BASE_URL}/posts`,
    ADD_POST: `${BASE_URL}/posts/post`
}
export const MEMBER = {
    MYPAGE: `${BASE_URL}/members/me`,
    LOGIN: `${BASE_URL}/members/login`,
    SIGNUP: `${BASE_URL}/members/join`,
}
export const STORE = {
    STORE: `${BASE_URL}/stores`,
    STORE_DETAIL: `${BASE_URL}/stores`,
    STORE_CONDITION: `${BASE_URL}/stores/conditions?`,
    STORE_QUERY : `${BASE_URL}/stores/conditions?query=`,
}
export const REVIEW = {
    REVIEW: `${BASE_URL}/reviews`,
}

