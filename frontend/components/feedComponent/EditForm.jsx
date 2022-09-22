import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { BsPlusSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import PostService from "../../services/post.service";

function EditForm({id}) {
    const router = useRouter();
    const [content, onChangeContent] = useInput("");
    const [title, onChangeTitle] = useInput("");
    const [hashTags, setHashTags] = useState("");

    const handleHashTags = (e) => {
      e.preventDefault();
      setHashTags([e.target.value]);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
          PostService.editPost(`${id}`, content, hashTags, title).then(
            () => {
              alert("게시글 수정 완료");
              router.push("/feedPage");
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }
      };
    
      return (
        <form onSubmit={handleForm} className="my-6" encType="multipart/form-data">
          <div>
            <p className="font-semibold text-lg">사진 첨부</p>
            <p className="text-sm text-gray-600">
              음식 사진이나 메뉴판 사진을 첨부해주세요.{" "}
            </p>
            {/* 이미지 */}
            {/* <input
              type="file"
              multiple
              hidden
              ref={imageInput}
              onChange={handleFileInput}
            /> */}
            <button className="my-3">
              {/* onClick={(e) => imageInput.current && imageInput.current.click()} */}
              <BsPlusSquare size="60" />{" "}
            </button>
          </div>
          <div>
            <p className="font-semibold text-lg mt-8">피드</p>
          </div>
          <div className="my-4">
            <input
              className="border-b-2 w-full px-2"
              value={title}
              onChange={onChangeTitle}
              placeholder="제목"
            />
          </div>
          <div className="my-4">
            <input
              className="border-b-2 w-full px-2"
              value={hashTags}
              onChange={handleHashTags}
              placeholder="해쉬태그"
            />
          </div>
          <div>
            <input
              value={content}
              onChange={onChangeContent}
              className="w-full border h-96 px-4"
              placeholder="채식에 대한 이야기를 자유롭게 공유해주세요 #해시태그를 입력해주세요."
            />
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
      )
}

export default EditForm;