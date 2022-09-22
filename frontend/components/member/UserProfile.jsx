import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import Link from "next/link";
import { BsPencilSquare, BsBookmark } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import AuthService from "../../services/auth.service";
function UserProfile(props) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getMemberDetail().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [setContent]);
  console.log(content);
  // console.log("타입", content.nickname.slice(0))

  return (
    <div className="text-center ">
      <div className="flex pb-6 border-b-2 border-gray-2 mb-4">
        <div className="mr-10">
          <div className="rounded-full py-6 px-8 bg-bg inline-block text-lg">
            {/* {content.nickname.slice(0,1)} */}
          </div>
        </div>
        <div className="flex font-semibold ">
          <p className="text-lg my-auto">{content.nickname}</p>
          <p className="text-sm my-auto text-text-green ml-4">
            {content.vegetarianType}
          </p>
        </div>
        <div className="my-auto ml-auto text-gray-3">
          <Link href="/editProfile">
            <BsPencilSquare size="20" />
          </Link>
        </div>
      </div>
      <Link href="/foodRecord/count">
        <div className="flex border-b-2 border-gray-2 pb-4 text-green justify-between">
          <div className="flex">
            <FaLeaf size="25" />
            <p className="my-auto ml-4 font-semibold">내가 실천한 채식</p>
          </div>
          <div className="my-auto">
            <AiOutlineRight />
          </div>
        </div>
      </Link>
      <Link href="/likes">
        <div className="flex border-b-2 border-gray-2 py-4 text-gray-3 justify-between">
          <div className="flex">
            <p className="my-auto">
              <BsBookmark size="25" />
            </p>
            <p className="ml-4 my-auto font-semibold">스크랩</p>
          </div>
          <div className="my-auto">
            <AiOutlineRight />
          </div>
        </div>
      </Link>
      <div className="flex border-b-2 border-gray-2 py-4 text-gray-3 justify-between">
        <div className="flex">
          <p className="my-auto">
            <BsBookmark size="25" />
          </p>
          <p className="ml-4 my-auto font-semibold">피드</p>
        </div>
        <div className="my-auto">
          <AiOutlineRight />
        </div>
      </div>
      <div className="my-11">
        <button
          onClick={logout}
          className="font-semibold rounded-lg bg-bg w-full h-12"
        >
          로그아웃
        </button>
      </div>
    </div>
  );

  function logout() {
    AuthService.logOut();
  }
}

export default UserProfile;
