import React, { useState, useEffect } from "react";
import SliderImg from "../../post/common/SliderImg";
import { LikeProvider } from "../../../contexts/Like";
import LikeContainer from "../containers/LikeContainer";
import Link from "next/link";

function LikepostList({ item }) {
  console.log(item);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const entries = Object.entries(item);
    entries.map(([key, val] = entry) => {
      if (key === "member") {
        const entries2 = Object.entries(val);
        entries2.map(([key, val] = entry) => {
          if (key === "nickname") {
            setNickname(`${val}`);
          }
        });
      }
    });
  });
  console.log("nickname", nickname);
  return (
    <div className="mt-5 px-3" key={item.id}>
      <div className="flex">
        <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-bg text-xs text-center">
          {item.member.nickname}
        </div>
        <div className="ml-3">
          <div className="my-auto text-left">{item.member.nickname}</div>
          <div className="text-xs my-2 text-gray-500">{item.createdTime}</div>
        </div>
      </div>
      <div className="my-3 text-center">
        <SliderImg item={item.post} />
      </div>
      <div>
        <LikeProvider type="post">
          <LikeContainer name={item.id} id={item.post.id} type="post" />
        </LikeProvider>
      </div>
      <div className="flex my-3">
        {item.post.hashTags &&
          item.post.hashTags.map((content) => (
            <Link href={`/feed/hashTags/${content.value}`} key={content.id}>
              <div className="bg-bg rounded-full mr-2 py-2 px-3 text-xs text-gray-3 cursor-pointer">
                #{content.value}
              </div>
            </Link>
          ))}
      </div>
      <div className="text-left my-6">{item.post.content}</div>
    </div>
  );
}

export default LikepostList;
