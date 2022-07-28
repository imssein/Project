import React from "react";
import { useSelector } from "react-redux";
import Title from "../components/intro/Title";
import PostCard from "../components/post/PostCard";

function community(props) {
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div className="px-4 text-center">
        <Title title="VEGAN FEED" />
      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </div>
  );
}

export default community;
