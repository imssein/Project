import React, { useState, useCallback } from "react";
import PostCardContent from "./PostCardContent";
import PostImages from "./PostImages";
import PostCardButton from "./PostCardButton";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    // true는 false로 false를 true로 만드는 코드
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const id = useSelector((state) => state.user.me?.id);

  return (
    <div className="mx-6">
      <div className="flex">
        <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-slate-200 text-xs text-center">
          {post.User.nickname}
        </div>
        <div className="ml-6 my-auto">{post.User.nickname}</div>
      </div>
      <div className="text-left text-sm my-2 text-gray-500">{post.date}</div>
      <div className="my-3">
        {post.Images[0] && <PostImages images={post.Images} />}
      </div>
      <div className="my-3">
        <div className="flex">
          <p className="text-green-800 font-bold mr-3 my-auto">
            {post.category}
          </p>
          <p className="font-semibold">{post.title}</p>
        </div>
        <div className="text-left my-6">
          <PostCardContent postData={post.content} />
        </div>
      </div>
      <div className="flex justify-between">
        {liked ? (
        <AiFillHeart
          size="24"
          color="#eb2f96"
          key="heart"
          onClick={onToggleLike}
        />
      ) : (
        <AiOutlineHeart
          size="24"
          color="#eb2f96"
          key="heart"
          onClick={onToggleLike}
        />
      )}
      <div>
      <AiOutlineComment size="24" onClick={onToggleComment} /> 
      </div>
        {id && post.User.id === id ? (
          <>
          <button>수정</button>
          <button>삭제</button>
          </>
        ) : ( 
          <button>신고</button>
        ) }
      </div>
      { commentFormOpened && (
        
        <CommentForm post={post} />
        
        
      )
        

      }
      </div>
  );
}

export default PostCard;
