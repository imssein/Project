import React, { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const sort = [
  {
    id: 1,
    title: "리뷰순",
    value: "review",
  },
  {
    id: 2,
    title: "평점순",
    value: "rating",
  },
  {
    id: 3,
    title: "조회순",
    value: "view",
  },
  {
    id: 4,
    title: "거리순",
    value: "distance",
  },
];
const vegetarianTypes = [
  {
    id: 1,
    title: "전체",
    value: "all",
  },
  {
    id: 2,
    title: "비건",
    value: "vegan",
  },
  {
    id: 3,
    title: "오보",
    value: "ovo",
  },
  {
    id: 4,
    title: "락토",
    value: "lacto",
  },
  {
    id: 5,
    title: "락토오보",
    value: "lactoovo",
  },
  {
    id: 6,
    title: "페스코",
    value: "pesco",
  },
];
const category = [
  {
    id: 1,
    title: "한식",
    value: "korean",
  },
  {
    id: 2,
    title: "일식",
    value: "japanese",
  },
  {
    id: 3,
    title: "중식",
    value: "chinese",
  },
  {
    id: 4,
    title: "양식",
    value: "western",
  },
  {
    id: 5,
    title: "동남아",
    value: "southeastAsia",
  },
  {
    id: 6,
    title: "인도",
    value: "indian",
  },
  {
    id: 7,
    title: "카페",
    value: "cafe",
  },
  {
    id: 8,
    title: "베이커리",
    value: "bakery",
  },
];

function FilterLogo(props) {
  const [showPopup, setShowPopup] = useState(false);

  function handleBtn(event) {
    console.log("클릭:", event.target.value);
  }
  // function handleCheckList = (e, content, idx, sort_type) => {
  //     e.target.checked ? setClickedCheckList([
  //       ...clickedCheckList, 
  //       { id: idx, content, sortType: sort_type },
  //     ])
  //     : setClickedCheckList(
  //         clickedCheckList.filter(list => list.content !== content)
  //     );
  // };
  return (
    <div className="">  
        <div className="mt-4 border border-gray-2 rounded-lg  px-2 py-2" showPopup={showPopup}>
          {/* 정렬 */}
          <div className="flex">
          <div className="text-sm my-auto font-semibold md:mr-9 mr-5">정렬</div>
          <div className="flex my-auto ml-4">
            {sort.map((item) => (
              <div
                key={item.id}
                className="bg-bg cursor-pointer hover:border-2 hover:border-text-color mr-2 text-sm text-center rounded-lg md:py-3 md:px-9 py-2 px-3 peer-checked:bg-text-color"
              >
                {item.title}
              </div>
            ))}
          </div>
          </div>
        
          {/* 채식 타입 */}
          <div className="flex">
          <div className="text-sm font-semibold mt-6 md:mr-6 mr-3">채식타입</div>
          <div className="grid my-3 md:grid-cols-6 grid-cols-3 ">
            {vegetarianTypes.map((item) => (
              <button
                key={item.id}
                className="bg-bg cursor-pointer hover:border-2 hover:border-text-color mr-2 my-2 text-sm text-center rounded-lg md:py-3 md:px-3 py-2 px-3 peer-checked:bg-text-color"
                value={item.title}
                onClick={handleBtn}
              >
                {item.title}
              </button>
            ))}
          </div>
          </div>
          <div className="flex">

         
          <div className="text-sm font-semibold mt-6 md:mr-6 mr-3">카테고리</div>
          {/* 카테고리 */}
          <div className="grid md:grid-cols-5 gap-2 my-3 grid-cols-4">
            {category.map((item) => (
              <div
                key={item.id}
                className="bg-bg cursor-pointer hover:border-2 hover:border-text-color  mr-2 text-sm text-center rounded-lg md:py-3 md:px-3 py-2 px-2 peer-checked:bg-text-color"
              >
                {item.title}
              </div>
            ))}
          </div>
          </div>
          {/* 체인점 그만보기 */}
          {/* <div className="text-sm font-semibold">체인점 그만보기</div> */}
          <div></div>
        </div>
      
     
    </div>
  );
}

export default FilterLogo;
