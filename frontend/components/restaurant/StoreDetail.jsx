import React from 'react';
import { useContext } from 'react';
import { StoreDetailContext } from '../../contexts/Store/detail';
import Restaurant from './Restaurant';
import RestaurantMap from './RestaurantMap';

function StoreDetail({ params }) {
    const content = useContext(StoreDetailContext);
    console.log(content)

    return (
        <div className="">
            <Restaurant content={content} />
            <RestaurantMap content={content} />
        </div>
    );
}

export default StoreDetail;