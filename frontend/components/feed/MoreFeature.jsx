import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import PostService from "../../services/post.service";
import UserService from "../../services/user.service";

function MoreFeature({ id, nickname }) {
  const [ user, setUser ] = useState('');

  // useEffect(() => {   
  //       UserService.getMemberDetail().then(
  //         (response) => {
  //           setUser(response.data);
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  // }, [setUser]);

  // console.log(user)
  
  function handleDelete() {

    PostService.deletePost(id).then(
      () => {
        alert("게시글 삭제");
        window.location.reload();
      }, 
      (error) => {
        console.log(error)
      }
    );
  }

  
  
  return (
    <div className="border float-right ">
      <div className="flex px-8 py-4 border-b">
        <Link href={`/editFeed/${id}`}>
        <button className="flex">
          <p className="mr-4 my-auto">수정하기</p> <BsPencil size={20}/>
        </button>
        </Link>
        
       
      </div>
      <div className="flex px-8 py-4 border-b text-red">
        <button className="flex" onClick={handleDelete}>
        <p className="mr-4 my-auto">삭제하기</p> <BsTrash size={20}/>
        </button>
      </div>
    </div>
  );
}

export default MoreFeature;
