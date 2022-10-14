import React, { useContext } from "react";
import { HashTagsContext } from "../../../contexts/Feed/HashTags";
import List from "../components/List";

function HashTagContainer(props) {
  const content = useContext(HashTagsContext);
  console.log(content);

  return (
    <div>
      {content && content.map((item) => <List item={item} key={item.id} />)}
    </div>
  );
}

export default HashTagContainer;
