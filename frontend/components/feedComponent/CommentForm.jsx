import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";

function CommentForm(props) {
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <form onSubmit={onSubmitComment} className="mt-4 flex">
      <input
        value={commentText}
        onChange={onChangeCommentText}
        className="border h-20 mr-4 w-4/5"
      />
      <button type="submit" className="w-1/5 border rounded">
        작성
      </button>
    </form>
  );
}

export default CommentForm;
