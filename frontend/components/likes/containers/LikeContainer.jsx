import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LIKE } from "../../../config";
import { LikeContext } from "../../../contexts/Like";
import authHeader from "../../../services/auth-header";
import LikeBtn from "../components/LikeBtn";

function LikeContainer({ id, name, type }) {
  const [like, setLike] = useState(false);
  const [likeId, setLikeId] = useState("");
  const [postId, setPostId] = useState("");

  const content = useContext(LikeContext);
  console.log("좋아요 content", content);
  console.log("id, name", id, name);
  
  useEffect(() => {
    if (type === "store") {
      {
        content &&
          content.map((item) => {
            if (item.store.name === `${name}`) {
              setLike(true);
              setLikeId(item.id);
            }
          });
      }
    } else if (type === "post") {
      {
        content &&
          content.map((item) => {
            let entries = Object.entries(item);
            entries.map(([key, val] = entry) => {
                if(key === "post") {
                    const entries2 = Object.entries(val)
                    entries2.map(([key, val] = entry) => {
                        console.log(`${key} is ${val}`)
                        if(key === 'id'){
                            if(`${val}` === `${id}`){
                                setLike(true);
                                setLikeId(item.id);
                            }
                        } 
                    })
                }
            });
          });
      }
    }
  }, [content, id, name, type]);

  const toggleLike = async (e) => {
    {
      like
        ? await axios
            .delete(`${LIKE.LIKE_LIST}/${likeId}?type=${type}`, {
              headers: authHeader(),
            })
            .then(() => {
              console.log("좋아요 취소");
              setLike(!like);
            })
        : await axios
            .get(`${LIKE.LIKE_LIST}/${id}?type=${type}`, {
              headers: authHeader(),
            })
            .then(() => {
              console.log("좋아요 추가");
              setLike(!like);
            });
    }
  };

  return <LikeBtn like={like} onClick={toggleLike} />;
}

export default LikeContainer;
