import React from 'react';
import { useContext } from 'react';
import { StoreSearchContext } from '../../contexts/Store/search';
import KakaoMap from '../store/KakaoMap';
import RestaurantsList from '../store/StoreList';

function SearchResult({ longitude, latitude }) {
    const content = useContext(StoreSearchContext);

    return (
        <div className='pb-36'>
            <KakaoMap longitude={longitude} latitude={latitude} content={content} />
            <RestaurantsList content={content} />
        </div>
    );
}

export default SearchResult;