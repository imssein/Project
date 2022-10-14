import React, { useContext, useEffect, useState } from "react";
import { LikeContext } from "../../../contexts/Like";
import StoreList from "../../common/StoreList";
import List from "../../feed/components/List";
import LikepostList from "../components/LikepostList";

function LikesListContainer({ type }) {
  const content = useContext(LikeContext);
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    if (type === "store") {
      {
        content &&
          content.map((item) => {
            setStoreList((prevList) => [...prevList, item.store]);
          });
      }
    }
  }, [content, type]);

  console.log(content);

  return (
    <div className="px-9 oy-3">
      {type === "store" && (
        <div>
          <div className="text-center text-lg font-semibold text-green mb-">
            좋아요한 맛집
          </div>
          <StoreList content={storeList} />
        </div>
      )}
      {type === "post" && (
        <div>
          <div className="text-center text-lg font-semibold text-green mb-">
            좋아요한 피드
          </div>
          {content && content.map((item) => <LikepostList item={item} key={item.id} />)}
        </div>
      )}
    </div>
  );
}

export default LikesListContainer;
