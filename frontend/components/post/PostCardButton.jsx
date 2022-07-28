import React from 'react';
import {AiOutlineHeart, AiOutlineComment} from 'react-icons/ai';

function PostCardButton(props) {
    return (
        <div className='flex border bg-gray-200'>
            <AiOutlineHeart size="20"/>
            <AiOutlineComment size="20"/>
        </div>
    );
}

export default PostCardButton;