import axios from 'axios';
import React, {useEffect, useState} from 'react';
import authHeader from '../../../services/auth-header';
import DayDiet from '../DayDiet';

function DietsListContainer({search}) {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:9090/v1/api/diets?date=${search}`, {
            headers: authHeader()
        }).then(function(response) {
            console.log(response)
            setContent(response.data)
        })
    }, [search]);
    console.log(content)

    return ( 
        <div className=''>
        <DayDiet content={content} />
        </div>
    )
}

export default DietsListContainer;