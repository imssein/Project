import React, {useEffect, useState} from 'react';
import DistrictMap from './DistrictMap';
import axios from 'axios';
const API_URL = "http://localhost:9090/v1/api/stores";

function SeoulData({params}) {
    const [content, setContent] = useState([]);
    console.log(API_URL + "/conditions?districts="+`${params}`);

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

export default SeoulData;