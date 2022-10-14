import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { LIKE } from "../../config";
import authHeader from "../../services/auth-header";

export const LikeContext = createContext({
  content: () => {},
});

export const LikeProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(`${LIKE.LIKE_LIST}?type=store`, {
        headers: authHeader(),
      })
      .then((result) => {
        setContent(result.data);
      });
  }, [setContent]);

  return (
    <LikeContext.Provider value={content}>{children}</LikeContext.Provider>
  );
};
