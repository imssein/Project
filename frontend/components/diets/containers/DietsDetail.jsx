import React from "react";
import { useContext } from "react";
import { DietDetailContext } from "../../../contexts/Diets/detail";
import Date from "../common/Date";
import Detail from "../Detail";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";

function DietsDetail() {
  const content = useContext(DietDetailContext);
  const router = useRouter();

  function handleLeft(e) {
    e.preventDefault();
    router.push("/foodRecord/all");
  }

  return (
    <div className="pt-6 px-9">
      <div className="flex justify-between mb-11">
        <FiArrowLeft size="25" onClick={handleLeft} />
        <div className="text-lg">{content.createdTime}</div>
        <div></div>
      </div>
      <div className="relative">
        <Detail content={content} />
      </div>
    </div>
  );
}

export default DietsDetail;
