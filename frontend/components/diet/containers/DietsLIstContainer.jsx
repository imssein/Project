import React, {useEffect, useState} from 'react';
import DietService from '../../../services/diet.service';
import DayDiet from '../DayDiet';

function DietsLIstContainer(props) {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        DietService.getDietsList().then(
            (response) => {
             setContent(response)
            },
            (error) => {
            console.log(error);
            }
        );
    }, []);
    console.log(content)
    return <DayDiet content={content} />
}

export default DietsLIstContainer;