import React, {useEffect, useState} from 'react';
import StoreService from '../../services/store.service';
import DistrictMap from './DistrictMap';
import RestaurantsList from './RestaurantsList';
import axios from 'axios';
const API_URL = "http://localhost:9090/v1/api/stores";

function RestaurantsData({params}) {
    const [content, setContent] = useState([]);
    console.log(params);

   useEffect(() => {
    if(params){
        axios.get(API_URL + "/conditions?districts=" + `${params}`).then(
            (response) => {
                setContent(response.data)
            }, 
            (error) => {
                console.log(error);
            }
        )
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

export default RestaurantsData;