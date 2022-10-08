import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FILTER_CATEGORYS } from "../filter/FilterCategory";
import { STORE } from "../../pages/config";
import { useRouter } from "next/router";

function SearchFilter(props) {
  const [cardList, setCardList] = useState([]);
  const [clickedCheckList, setClickedCheckList] = useState([]);

  // 필터 항목의 체크리스트를 누를 때 해당 카테고리의 체크리스트들을 배열의 형태로 저장

//   const getCardListData = useCallback(async () => {
//      const res = await axios.get(`${STORE.STORE_CONDITION}${queryString}`);
//      const data = await res.json();

//     setCardList(data.result);
//   }, []);

//   useEffect(() => {
//     getCardListData();
//   }, [getCardListData]);

  const makeQueryString = () => {
    const queryString = clickedCheckList
      .map(({ id, content, sortType }) => {
        return sortType === "category" || sortType === "types"
          ? `${sortType}_id=${parseInt(id) + 1}`
          : `${sortType}=${content}`;
      })
      .map((item, idx) => {
        return idx === 0 ? item : "&" + item;
      })
      .join("");
    console.log("쿼리스티링", `${queryString}`)

    axios.get(`${STORE.STORE_CONDITION}${queryString}`).then((result) => {
        console.log("data", result.data)
    })
    // router.push(`?${queryString}`);
  };

  const handleCheckList = (e, content, idx, sort_type) => {
    e.target.checked
      ? setClickedCheckList([
          ...clickedCheckList,
          { id: idx, content, sortType: sort_type },
        ])
      : setClickedCheckList(
          clickedCheckList.filter((list) => list.content !== content)
        );
  };

  return (
    <div>
      <div>
        {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
          return (
            <div key={idx}>
              <div>{title}</div>
              <div>
                {contents.map((content, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => handleCheckList(e, content, idx, sort_type)}
                  >
                    <input type="checkbox" />
                    {content}
                  </div>
                ))}
                <button onClick={makeQueryString}>필터 적용</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchFilter;
