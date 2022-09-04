import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9090/v1/api";

// 게시글 목록 조회
const getAllPosts = () => {
  return axios.get(API_URL + "/posts");
};

// 게시글 삭제
const deletePost = (id) => {
  return axios.delete(API_URL + `/posts/${id}`, { headers: authHeader() });
};

// 게시글 수정 
const editPost = async (id, content, hashTags, title) => {
  const response = await axios.post(
    API_URL + `/posts/${id}`,
    {
      content,
      hashTags,
      title,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
}

// 게시글 작성
const createPosts = async (content, hashTags, title) => {
  const response = await axios.post(
    API_URL + "/posts/post",
    {
      content,
      hashTags,
      title,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
};

const PostService = {
  getAllPosts,
  deletePost,
  createPosts,
  editPost,
};

export default PostService;
