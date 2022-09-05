import React, {useEffect, useState} from 'react';
import DietService from '../../../services/diet.service';
import Detail from '../Detail';

function DietDetailContainer({params}) {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        DietService.detailDiet(params).then(
            (response) => {
             setContent(response)
            },
            (error) => {
            console.log(error);
            }
        );
    }, [params]);
    console.log(content)
    return <Detail content={content} />
}

export default DietDetailContainer;