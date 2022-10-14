import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { LIKE } from '../../../config';
import { LikeContext } from '../../../contexts/Like';
import authHeader from '../../../services/auth-header';
import LikeBtn from '../components/LikeBtn';

function LikeContainer({id, name}) {
    const [like, setLike] = useState(false);
    const [likeId, setLikeId] = useState("");

    const content = useContext(LikeContext)
    console.log("content", content)
    console.log("id, name", id, name)

    useEffect(() => {
        {content && content.map((item) => {
            if(item.store.name === `${name}`){
                setLike(true)
                setLikeId(item.id)
            } 
        })}
    }, [content, name]);
    
    const toggleLike = async(e) => {
        {like ? await axios.delete(`${LIKE.LIKE_LIST}/${likeId}?type=store`, {
            headers: authHeader()
        }).then(() => {
            console.log("좋아요 취소")
            setLike(!like)
        }) :
        await axios.get(`${LIKE.LIKE_LIST}/${id}?type=store`, {
            headers: authHeader()
        }).then(() => {
            console.log("좋아요 추가")
            setLike(!like)
        })
    }
    }

    return (
            <LikeBtn like={like} onClick={toggleLike}  />
    );
}

export default LikeContainer;