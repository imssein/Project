import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function LikeBtn({ onClick, like}) {
    return (
        <div className='ml-3'>
            <button onClick={onClick}>
                {like ? <AiFillHeart className="ml-1" size="27" color='pink' /> : <AiOutlineHeart className="" size="27" /> }
            </button>
            {/* <p className='text-sm'>좋아요</p> */}
        </div>
    );
}

export default LikeBtn;