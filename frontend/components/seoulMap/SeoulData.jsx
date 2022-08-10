import React, {useEffect, useState} from 'react';
import StoreService from '../../services/store.service';
import DistrictMap from './DistrictMap';
import RestaurantsList from '../nearbySearch/RestaurantsList';

function SeoulData({params}) {
    const [content, setContent] = useState([]);
    console.log(params);

   useEffect(() => {
    if(params){
    StoreService.getStoreDistrict({params}).then(
        (response) => {
            setContent(response.data)
        }, 
        (error) => {
            console.log(error);
        }
    );
    }
    else { console.log("대기")}
   }, [params, setContent]);
    console.log({content})
    return (
        <div>
            <DistrictMap content={content} />
        </div>
    );
}

export default SeoulData;