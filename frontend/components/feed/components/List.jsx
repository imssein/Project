import React, { useEffect, useState } from "react";
import SliderImg from "../../post/common/SliderImg";
import EditDelete from "../../post/common/EditDelete";
import { POST } from "../../../config";
import { LikeProvider } from "../../../contexts/Like";
import LikeContainer from "../../likes/containers/LikeContainer";
import Link from "next/link";

function List({ item }) {
  const [nickName, setNickName] = useState([]);
  const [hashTags, setHashTags] = useState([]);
  const [entries, setEntries] = useState([]);
  const result = [];

  // useEffect(() => {
  //   setEntries(Object.entries(item))
  //   {entries.map(([key, val] = entry) => {
  //     if(key === 'hashTags'){
  //       const user = Object.entries(val);
  //       user.map(([key, val] = entry) => {
  //         result.push(`${key} ${val}`)
  //       });
  //     }
  //   })}
  // }, [item])

  // useEffect(() => {
  //   {item.hashTags && item.hashTags.map((content) => (
  //     console.log(content)
  //   ))}
  // })
  console.log("result", result);

  useEffect(() => {
    let entries = Object.entries(item);
    entries.map(([key, val] = entry) => {
      if (key === "member") {
        const user = Object.entries(val);
        user.map(([key, val] = entry) => {
          if (key === "nickname") {
            setNickName(`${val}`);
          }
        });
      }
    });
  }, [item]);

  return (
    <div className="mt-5 px-3" key={item.id}>
      <div className="flex">
        <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-bg text-xs text-center">
          {nickName}
        </div>
        <div className="ml-3">
          <div className="my-auto text-left">{nickName}</div>
          <div className="text-xs my-2 text-gray-500">{item.createdTime}</div>
        </div>
      </div>
      <div className="my-3 text-center">
        <SliderImg item={item} />
      </div>
      <div className="flex justify-between">
        <div>
          <LikeProvider type="post">
            <LikeContainer name={item.id} id={item.id} type="post" />
          </LikeProvider>
        </div>
        <div>
          <EditDelete
            api={`${POST.POST_LIST}/${item.id}`}
            url={`/feed`}
            editApi={`/feed/edit/${item.id}`}
          />
        </div>
      </div>
      <div className="flex my-3">
        {item.hashTags &&
          item.hashTags.map((content) => (
            <Link href={`/feed/hashTags/${content.value}`} key={content.id}>
              <div className="bg-bg rounded-full mr-2 py-2 px-3 text-xs text-gray-3 cursor-pointer">
                #{content.value}
              </div>
            </Link>
          ))}
      </div>

      <div className="text-left my-6">{item.content}</div>
    </div>
  );
}

export default List;
