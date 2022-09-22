import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
// import CommentForm from "../feed/CommentForm";
import MoreFeature from "./MoreFeature";

function Review({ posts, getPosts }) {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const onToggleLike = useCallback(() => {
    // true는 false로 false를 true로 만드는 코드
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onToggleMore = useCallback(() => {
    setMore((prev) => !prev);
  }, []);

  console.log(posts);
  return (
    <div className="pb-36 z-30">
      <div className="my-11 font-semibold text-lg">리뷰</div>
      <div className="text-center">
        {posts.map((post) => (
          <div className="mt-5" key={post.id}>
            <div className="flex">
              <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-bg text-xs text-center">
                {post.memberDto.nickname}
              </div>
              <div className="ml-3">
                <div className="my-auto text-left">
                  {post.memberDto.nickname}
                </div>
                <div className="text-xs my-2 text-gray-500">
                  {post.createdTime}
                </div>
              </div>
              <div className="my-auto ml-auto">
                <FiMoreHorizontal size="25" onClick={onToggleMore} />
              </div>
            </div>

            {more && (
              <MoreFeature
                storeId={post.storeId}
                id={post.id}
                nickname={post.memberDto.nickname}
              />
            )}
            {/* 이미지 */}

            <div className="my-3  ">
            {post.uploadFiles &&
                post.uploadFiles.map((item) => (
                  <div className="my-auto" key={item.id}>
                    <Image
                      src={`/images/${item.savedFileName}`}
                      width={500}
                      height={500}
                      alt="식당 사진"
                    />
                  </div>
                ))}
              
            </div>

            <div className="flex">
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
              <div className="ml-6">
                <AiOutlineComment size="24" onClick={onToggleComment} />
              </div>
            </div>
            <div className="my-3">
              <p className="font-semibold">{post.title}</p>
            </div>
            <div className="text-left my-6">{post.content}</div>
            {/* <div className="text-left my-6">{post.starRating}</div> */}

            {/* {commentFormOpened && <CommentForm />} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
