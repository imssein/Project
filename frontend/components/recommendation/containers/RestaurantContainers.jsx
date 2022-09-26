import axios from "axios";
import React, { useEffect, useState } from "react";
import Recommendation from "..";

function RestaurantContainers( {data }) {
  const [content, setContent] = useState("");
  const query = encodeURIComponent(data);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [value3, setValue3] = useState([]);
  const value = [];


  useEffect(() => {
    if (query) {
      axios
        .get(
          `http://localhost:9090/v1/api/stores/conditions?$query=${query}`
        )
        .then(
          (response) => {
            setContent(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log("대기");
    }
  }, [query, setContent]);

  useEffect(() => {
    setValue1(content[Math.floor(Math.random() * content.length)])
    setValue2(content[Math.floor(Math.random() * content.length)])
    setValue3(content[Math.floor(Math.random() * content.length)])
  }, [setValue1, content, setValue2, setValue3])

  // const randomValue1 = content[Math.floor(Math.random() * content.length)];
  // const randomValue2 = content[Math.floor(Math.random() * content.length)];
  // const randomValue3 = content[Math.floor(Math.random() * content.length)];

  // console.log(randomValue1)
  // console.log(randomValue2)
  // console.log(randomValue3)

  console.log(value1, value2, value3)

  return (
    <div>
      <Recommendation value1={value1} value2={value2} value3={value3} />
    </div>
  )
}

export default RestaurantContainers;
