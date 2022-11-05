import React, { useState } from "react";
import Modal from "./Modal";
import { HiAdjustments } from "react-icons/hi";
import District from "./District";

function Filter(props) {
  const [modalVisible, setModalVisable] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);
  const [content, setContent] = useState([])

  function handleModal(){
    modalVisible ? setModalVisable(false) : setModalVisable(true)
  }
  console.log(content)

  return (
    <div className="flex">

      <div className="flex ">
        <button
          className="border-2 border-green-2 rounded-full py-2 px-3"
          onClick={handleModal}
        >
          <HiAdjustments size="20" />
        </button>
      <>{modalVisible && <Modal setContent={setContent} setModalVisable={setModalVisable} handleModal={handleModal} />}</>

      </div>
      <div>
        <button
          className="text-sm ml-3 border-2 border-green-2 rounded-full py-2 px-3"
          onClick={() =>
            modalLocation ? setModalLocation(false) : setModalLocation(true)
          }
        >
          지역
        </button>
        <>{modalLocation && <District />} </>
      </div>
    </div>
  );
}

export default Filter;
