import axios from 'axios';
import React, {useEffect, useState} from 'react';
import KakaoMap from './KakaoMap';

function SearchData({item}) {
    console.log("item:", item)
    const query = encodeURIComponent(item)
    console.log("Search:", query)
    const [content, setContent] = useState({});

    useEffect(() => {
        if(query) {
            axios.get(`http://localhost:9090/v1/api/stores/conditions?query=${query}`)
                .then(
                    (response) => {
                        setContent(response.data)
                    }, 
                    (error) => {
                        console.log(error);
                    }
                )
        }  else { console.log("대기")}  
    }, [item, query, setContent]);
    
    console.log({content})
    
    return (
        <div>
            <KakaoMap content={content} />
        </div>
    );
}

export default SearchData;