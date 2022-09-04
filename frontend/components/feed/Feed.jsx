import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import CommentForm from "./CommentForm";
import More from "./MoreFeature";
function Feed({ posts, getPosts }) {
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
    <div className="">
      {posts.map((post) => (
        <div className="mx-6" key={post.id}>
          <div className="flex">
            <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-slate-200 text-xs text-center">
              {post.member.nickname}
            </div>
            <div className="ml-3">
              <div className="my-auto text-left">{post.member.nickname}</div>
              <div className="text-xs my-2 text-gray-500">
                {post.createdTime}
              </div>
            </div>
            <div className="my-auto ml-auto">
              <FiMoreHorizontal size="25" onClick={onToggleMore} />
            </div>
          </div>

          {more && <More id={post.id} nickname={post.member.nickname} />}
          {/* 이미지 */}
          <div className="my-3  ">
            <Image
              src="/images/recipe.png"
              width={500}
              height={500}
              alt="예시사진"
            />
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
            <div className="flex">
              {post.hashTags.map((data) => (
                <p
                  key={data.id}
                  className="text-green-800 font-bold mr-3 my-auto"
                >
                  #{data.value}
                </p>
              ))}
              <p className="font-semibold">{post.title}</p>
            </div>
            <div className="text-left my-6">{post.content}</div>
          </div>
          {commentFormOpened && <CommentForm />}
        </div>
      ))}
    </div>
  );
}

export default Feed;
