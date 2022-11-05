import React, { useCallback, useState } from "react";
import { FILTER_CATEGORYS } from "../FilterCategory";
import { GrPowerReset } from "react-icons/gr"
import { AiOutlineClose} from "react-icons/ai"
import { STORE } from "../../../config";
import axios from "axios";
import { useRouter } from "next/router";

function Modal({ setModalVisible, handleModal, setContent}) {
    const router = useRouter();

  const [clickedCheckList, setClickedCheckList] = useState([]);
   
  function cancelCheck() {
    setClickedCheckList([])
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
  console.log("체크", clickedCheckList);

  const makeQueryString = () => {
    const queryString = clickedCheckList
      .map(({ id, content, sortType }) => {
        return sortType === 'category' || sortType === 'types'
          ? `${sortType}_id=${parseInt(id) + 1}`
          : `${sortType}=${encodeURIComponent(content)}`;
      })
      .map((item, idx) => {
        return idx === 0 ?  item : '&' +  item;
      })
      .join('');
    console.log(`${STORE.STORE_CONDITION}${queryString}`)
    axios.get(`${STORE.STORE_CONDITION}${queryString}`)
      .then((result) => {
        setContent(result.data)
      })
    router.push(`/restaurant?${queryString}`)
  };


  return (
    <div className="rounded-lg bg-main w-10/12 md:w-3/12 z-30 absolute mt-11">
      <div className="flex justify-between border-b border-gray-4 py-2 px-2 ">
        <button onClick={cancelCheck} className="my-auto"><GrPowerReset /></button>
        <div className="font-bold text-lg">필터</div>
        <button className="my-auto" onClick={handleModal}><AiOutlineClose /></button>
      </div>
      {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
        return (
          <div key={idx} className="py-2 px-3">
            <div className="py-2 font-semibold">{title}</div>
            <div className="grid grid-cols-3">
              {contents.map((content, idx) => (
                <label
                className=""
                  key={idx}
                  onClick={(e) => handleCheckList(e, content, idx, sort_type)}
                >
                  <input key={idx} type="checkbox" className="hidden peer"/>

                  <div className="peer-checked:bg-text-color peer-checked:text-white bg-white rounded-full m-1 text-center py-2">{content}</div>
                </label>
              ))}
            </div>
          </div>
        );
      })}
      <div className="p-2 flex justify-center border-t border-gray-4" onClick={handleModal}>
        <button className="bg-gray-4 w-full py-3" >취소</button>
        <button onClick={makeQueryString} className="w-full py-3 bg-green text-white ml-2">적용</button>
      </div>
    </div>
  );
}

export default Modal;
