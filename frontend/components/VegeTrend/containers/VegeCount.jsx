import React, { useState, useEffect } from "react";
import DietChart from "../DietChart";
import VegeType from "../VegeType";

function VegeCount({ content }) {
  const [vegetarianType, setVegetarianType] = useState([]);

  // 채식 타입만 배열에 담기
  useEffect(() => {
    {
      content &&
        content.map((item) =>
          setVegetarianType((vegetarianType) => {
            return [...vegetarianType, item.vegetarianType];
          })
        );
    }
  }, [content]);

  const vegan = 0;
  const ovo = 0;
  const pesco = 0;
  const lacto = 0;
  const lactoovo = 0;
  const polo = 0;
  const flexi = 0;

  {
    vegetarianType &&
      vegetarianType.map((item) => {
        if (item === "비건") {
          vegan++;
        } else if (item === "오보") {
          ovo++;
        } else if (item === "페스코") {
          pesco++;
        } else if (item === "락토") {
          lacto++;
        } else if (item === "락토오보") {
          lactoovo++;
        } else if (item === "폴로") {
          polo++;
        } else if (item === "플렉시") {
          flexi++;
        }
      });
  }

  return (
    <div>
      <VegeType data={[vegan, ovo, pesco, lacto, lactoovo, polo, flexi]} />
      <DietChart data={[vegan, ovo, pesco, lacto, lactoovo, polo, flexi]} />
    </div>
  );
}

export default VegeCount;
