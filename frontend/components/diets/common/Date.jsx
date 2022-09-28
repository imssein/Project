import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";

function Date({ day }) {
  const router = useRouter();
  function handleLeft(e) {
    e.preventDefault();
    router.push("/foodRecord/calendar");
  }

  return (
    <div>
      <div className="flex justify-between mb-16">
        <div className="">
          <FiArrowLeft size="25" onClick={handleLeft} />
        </div>
        <div className="my-auto text-center text-lg">{day}</div>
        <div></div>
      </div>
    </div>
  );
}

export default Date;
