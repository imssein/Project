import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import Link from "next/link";
import { BsPencilSquare, BsBookmark } from "react-icons/bs";

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

  return (
    <div className="text-center py-5 mx-5">
      <div className="flex pb-6 border-b-2 mb-4">
        <div className="mr-10">
          <div className="rounded-full py-4 px-5 bg-gray-200 inline-block">
            현
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">{content.nickname}</p>
          <p className="text-sm my-auto">{content.vegetarianTypes}</p>
        </div>
        <div className="ml-6 mx-auto">
            <Link href="/editProfile"><BsPencilSquare size="20"/></Link>
        </div>
      </div>
      <div className="flex border-b-2 pb-4">
        <p className="my-auto"><BsBookmark size="30" /></p>
        <p className="ml-4 my-auto font-semibold ">스크랩</p>
      </div>
      <div className="flex border-b-2 py-4">
        <p className="my-auto"><BsBookmark size="30" /></p>
        <p className="ml-4 my-auto font-semibold ">피드</p>
      </div>
      

    </div>
  );
}

export default UserProfile;
