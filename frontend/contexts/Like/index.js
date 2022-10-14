import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { LIKE } from "../../config";
import authHeader from "../../services/auth-header";

export const LikeContext = createContext({
  content: () => {},
});

export const LikeProvider = ({ children, type }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(`${LIKE.LIKE_LIST}?type=${type}`, {
        headers: authHeader(),
      })
      .then((result) => {
        setContent(result.data);
      });
  }, [setContent, type]);

  return (
    <LikeContext.Provider value={content} type={type} >{children}</LikeContext.Provider>
  );
};
