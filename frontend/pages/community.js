import React from "react";
import { useSelector } from "react-redux";
import Title from "../components/intro/Title";
import PostCard from "../components/post/PostCard";
import FeedForm from "../components/post/FeedForm";
import PostFormLogo from "../components/post/PostFormLogo";

function Community(props) {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div className="px-4 text-center">
        <Title title="VEGAN FEED" />
        { isLoggedIn && <PostFormLogo /> }

      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </div>
  );
}

export default Community;
