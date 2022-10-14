import React, { useCallback } from "react";

function HashTags({
  hashTags,
  handleHashTags,
  hashArr,
  setHashArr,
  setHashTags,
}) {
  const onKeyUp = useCallback(
    (e) => {
      if (process.browser) {
        /* 요소 불러오기, 만들기*/
        const $HashWrapOuter = document.querySelector(".HashWrapOuter");
        const $HashWrapInner = document.createElement("div");

        /* 태그를 클릭 이벤트 관련 로직 */
        $HashWrapInner.addEventListener("click", () => {
          $HashWrapOuter?.removeChild($HashWrapInner);
          console.log($HashWrapInner.innerHTML);
          setHashTags(hashTags.filter((hashArr) => hashArr));
        });

        /* enter 키 코드 :13 */
        if (e.keyCode === 32 && e.target.value.trim() !== "") {
          console.log("Enter Key 입력됨!", e.target.value);
          $HashWrapInner.innerHTML = "#" + e.target.value;
          $HashWrapOuter?.appendChild($HashWrapInner);
          setHashTags([...hashTags, hashArr]);
          setHashArr("");
        }
      }
    },
    [hashTags, hashArr]
  );
  return (
    <div className="mt-2">
      <input
        className="border-b-2 border-bg w-full px-2  outline-none bg-gray-4 py-2"
        type="text"
        value={hashArr}
        onChange={handleHashTags}
        onKeyUp={onKeyUp}
        placeholder="#해시태그"
      />
    </div>
  );
}

export default HashTags;
