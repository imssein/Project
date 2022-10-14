import React, { useContext } from "react";
import { FeedContext } from "../../../contexts/Feed";
import HashTagBtn from "../common/HashTagBtn";
import List from "../components/List";

function FeedListContainer(props) {
  const content = useContext(FeedContext);
  console.log(content);

  return (
    <div>
        <div className="px-3 py-4 text-green">
            추천 검색어

        </div>
      <div className="flex px-2 pb-3">
        <HashTagBtn value="비건" />
        <HashTagBtn value="레시피" />
        <HashTagBtn value="식당" />
        <HashTagBtn value="상품" />
        <HashTagBtn value="일상" />
      </div>
     

      <div>
        {content && content.map((item) => <List item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeedListContainer;
