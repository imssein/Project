import React, { useContext, useEffect, useState } from 'react';
import { LikeContext } from '../../../contexts/Like';
import StoreList from '../../common/StoreList';

function LikesListContainer(props) {
    const content = useContext(LikeContext)
    const [store, setStore] = useState([])

    useEffect(() => {
        {content && content.map((item) => {
            setStore(prevList => [...prevList, item.store])
        })}
    }, [content])

    console.log(store)

    return (
        <div className='px-9 oy-3'>
            
            <div className="text-center text-lg font-semibold text-green mb-">좋아요한 맛집</div>
            
           <StoreList content={store} />
        </div>
    );
}

export default LikesListContainer;