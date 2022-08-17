import axios from 'axios';
import React, {useEffect, useState} from 'react';
import KakaoMap from './KakaoMap';

function SearchData({item}) {
    console.log(item)
    const query = encodeURIComponent(item)
    const url = `http://localhost:9090/v1/api/stores?categories=${query}`;
    const [content, setContent] = useState([]);

    console.log(url)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(url);
                console.log(res.data);
                setContent(res.data)
            } catch (e){
                console.log(e);
            }
        }
        if(url) fetchData();
    }, [url]);
    
    console.log(content)
    return (
        <div>
            <KakaoMap content={content} />
        </div>
    );
}

export default SearchData;