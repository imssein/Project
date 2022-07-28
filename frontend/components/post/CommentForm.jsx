import React from 'react';
import { useCallback, useState } from "react";
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

function CommentForm(props) {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
        
    }, [commentText]);

    return (
        <form onSubmit={onSubmitComment} className="text-left my-4 flex">
            <input value={commentText} onChange={onChangeCommentText} className="border h-20 w-4/5" />
            <button type='submit' className='w-1/5 border rounded mx-10'>작성</button>
            
        </form>
    );
}

export default CommentForm;