import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../../services/auth-header";
import VegeCount from "./VegeCount";
import VegeLevel from "../VegeLevel";
import VegeMonth from "../VegeMonth";
import VegeType from "../VegeType";

function DietsListContainer(props) {
  const [content, setContent] = useState([]);
  const [length, setLength] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9090/v1/api/diets", {
        headers: authHeader(),
      })
      .then(function (response) {
        console.log(response);
        setContent(response.data);
      });
  }, [setContent]);

  useEffect(() => {
    setLength(content.length);
  }, [content.length]);

  return (
    <div className="pb-36 h-full bg-gray-4">
      {/* 현재 나의 채식 단계는? */}
      <div>
        <VegeLevel length={length} />
      </div>
      <div className="mt-5">
        <VegeCount content={content} />
      </div>
      {/* 월별 채식 기록 현황 */}
      <div className="mt-9 bg-gray-4">
        <VegeMonth content={content} />
      </div>
    </div>
  );
}

export default DietsListContainer;
