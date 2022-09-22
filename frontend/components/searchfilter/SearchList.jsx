import React, { useState, useEffect, useCallback } from "react";

const FILTER_CATEGORYS = [
  {
    sort_type: "sorted",
    title: "정렬",
    contents: ["리뷰순", "평점순", "조회순", "거리순"],
  },
  {
    sort_type: "categories",
    title: "카테고리",
    contents: [
      "한식",
      "일식",
      "중식",
      "양식",
      "동남아",
      "인도",
      "카페",
      "베이커리",
      "분식",
    ],
  },
  {
    sort_type: "vegetarianTypes",
    title: "채식타입",
    contents: ["전체", "비건", "오보", "락토", "락토오보", "페스코"],
  },
];

function SearchList(props) {
  const [storeList, setStoreList] = useState([]);
  const [clickedCheckList, setClickedCheckList] = useState([]);
  const [show, setShow] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

    function togglePopup(event) {
      setShowPopup(event.target.value);
    }

  function handleBtn(event) {
    console.log("클릭:", event.target.value);
  }

  // function togglePopup(e) {
  //   setShow(e.target.value);
  // }


  function togglePopup2(event) {
    setShowPopup(event.target.value);
  }

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
  {
    clickedCheckList.map((item, idx) => console.log(item.sortType));
  }

  console.log("체크", clickedCheckList);
  return (

      <div className="flex">
        {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
          return (
            <div key={idx}>
              <button value="false" onClick={togglePopup} className="rounded-lg bg-bg py-2 px-4 text-center hover:border-text-green hover:border-2 peer-checked:bg-green mr-4">{title}</button>
              { showPopup ? 
              <div className="relative bg-gray-2 rounded-full inline-block font-semibold py-3 px-4">
                {contents.map((content, idx) => (
                  <div key={idx} onClick={e => handleCheckList(e, content, idx, sort_type)}>
                  <input key={idx} type="checkbox" /> 
                  {content}
                  </div>
                ))}
              </div>
              : null }
            </div>
          );
        })}
    </div>
  );
}

export default SearchList;
