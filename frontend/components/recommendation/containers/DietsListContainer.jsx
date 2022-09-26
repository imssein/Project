import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../../services/auth-header";
import VegeCount from "../VegeCount";

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
    <VegeCount content={content} />
  );
}

export default DietsListContainer;
