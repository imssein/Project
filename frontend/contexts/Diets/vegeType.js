import { createContext, useEffect, useState } from "react";
import { DIET } from "../../config";
import authHeader from "../../services/auth-header";
import axios from "axios";

export const VegeTypeContext = createContext({
  type: () => {},
});

export const VegeTypeProvider = ({ children }) => {
  const [content, setContent] = useState("");
  const [vegetarianType, setVegetarianType] = useState([]);
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get(`${DIET.DIETSLIST}`, {
        headers: authHeader(),
      })
      .then((result) => {
        setContent(result.data);
      });
  }, [setContent]);

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
  useEffect(() => {
    setData([vegan, ovo, pesco, lacto, lactoovo, polo, flexi])
  }, [setData, vegan, ovo, pesco, lacto, lactoovo, polo, flexi])


  
  const maxValue = Math.max(...data);

  useEffect(() => {
    if (data.indexOf(maxValue) === 0) {
      setType("비건");
    } else if (data.indexOf(maxValue) === 1) {
      setType("오보");
    } else if (data.indexOf(maxValue) === 2) {
      setType("페스코");
    } else if (data.indexOf(maxValue) === 3) {
      setType("락토");
    } else if (data.indexOf(maxValue) === 4) {
      setType("락토오보");
    } else if (data.indexOf(maxValue) === 5) {
      setType("폴로");
    } else if (data.indexOf(maxValue) === 6) {
      setType("플렉시");
    }
  }, [data, maxValue, setType]);

  return (
    <VegeTypeContext.Provider value={ type }>
      {children}
    </VegeTypeContext.Provider>
  );
};
