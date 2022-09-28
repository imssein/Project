import React, { useContext, useState, useEffect } from "react";
import Recommendation from "../index";
import { StoreSearchContext } from "../../../contexts/Store/search";

function GeolocationRecContainer( {title }) {
  const content = useContext(StoreSearchContext);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);

  useEffect(() => {
    setValue1(content[Math.floor(Math.random() * content.length)]);
    setValue2(content[Math.floor(Math.random() * content.length)]);
  }, [content, setValue1, setValue2]);

  return (
    <div className="mt-8 rounded-xl py-4 px-4 bg-white mx-9">
      <div className="text-xl text-left  text-text-green font-semibold ">
        {title}
      </div>
      <Recommendation value1={value1} value2={value2} />
    </div>
  );
}

export default GeolocationRecContainer;
