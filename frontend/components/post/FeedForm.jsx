import React, { useCallback, useState, useRef } from "react";
import VegitarianTypes from "../common/VegitarianTypes";
import { useDispatch, useSelector } from "react-redux";
import {BsPlusSquare} from 'react-icons/bs';
import Image from "next/image";
import {addPost} from "../../reducers/post";
import Router from "next/router";
function FeedForm(props) {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
}, []); 
const onChangeContent = useCallback((e) => {
  setContent(e.target.value);
}, []); 

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
    setTitle('');
    setContent('');
    Router.push('/community');
  }, []);

  return (
    <form className="my-6" encType="multipart/form-data" onSubmit={onSubmit}>
      <div>
      <p className="font-semibold text-lg">사진 첨부</p>
      <p className="text-sm text-gray-600">
        음식 사진이나 메뉴판 사진을 첨부해주세요.{" "}
      </p>
      {/* 이미지 */}
      <input type="file" multiple hidden ref={imageInput} />
      <button className="my-3" onClick={onClickImageUpload}><BsPlusSquare size="60"/> </button>
    </div>
    <div>
        {imagePaths.map((v) => {
          <div key={v} className="inline-block" >
            <Image src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <button>제거</button>
            </div>
          </div>;
        })}
      </div>
      <VegitarianTypes />
      <div>
        <div>
          <p className="font-semibold text-lg mt-8">피드</p>
        </div>
        <div className="my-4">
          <input className="border-b-2 w-full" value={title} onChange={onChangeTitle} />
        </div>
        <div>
          <input
            value={content}
            onChange={onChangeContent}
            className="w-full border h-96 px-4"
            placeholder="채식에 대한 이야기를 자유롭게 공유해주세요 #해시태그를 입력해주세요."
          />
        </div>
      </div>

      <div className=" flex justify-end">
      <button
        className=" text-lg py-6 font-bold text-green-900"
        type="submit"
      >
        저장하기
      </button>
      </div>
    </form>
  );
}

export default FeedForm;
