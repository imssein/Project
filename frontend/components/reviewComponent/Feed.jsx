import React, { useState, useCallback} from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import MoreFeature from "./MoreFeature";

function Feed({ content  }) {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [more, setMore] = useState(false);

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

  // console.log(items);
  return (
    <div className="pb-36 z-30">
      <div className="my-11 font-semibold text-lg">리뷰</div>
      <div className="text-center">
        {content.map((item) => (
          <div className="mt-5" key={item.id}>
            <div className="flex">
              <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-bg text-xs text-center">
                {item.memberDto.nickname}
              </div>
              <div className="ml-3">
                <div className="my-auto text-left">
                  {item.memberDto.nickname}
                </div>
                <div className="text-xs my-2 text-gray-500">
                  {item.createdTime}
                </div>
              </div>
              <div className="my-auto ml-auto">
                <FiMoreHorizontal size="25" onClick={onToggleMore} />
              </div>
            </div>

            {more && (
              <MoreFeature
                storeId={item.storeId}
                id={item.id}
                nickname={item.memberDto.nickname}
              />
            )}
            {/* 이미지 */}

            <div className="my-3  ">
            {item.uploadFiles &&
                item.uploadFiles.map((item) => (
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
              <p className="font-semibold">{item.title}</p>
            </div>
            <div className="text-left my-6">{item.content}</div>
            {/* <div className="text-left my-6">{item.starRating}</div> */}
            {/* {commentFormOpened && <CommentForm />} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
