import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function PostCardContent({ postData }) {
  return (
    <div>
      {/* 해쉬 태그만을 어떻게 추출할 것인가?? */}
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <a className="">{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </div>
  );
}
PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
