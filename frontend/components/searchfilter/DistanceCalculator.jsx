import React, {useEffect, useState} from 'react';
import DistanceRange from "./DistanceRange";

function DistanceCalculator({longitude, latitude}) {
    const [distance, setDistance] = useState([]);

    useEffect(() => {
        if(longitude && latitude){
            for(var i=0;i<content.length;i++){ 
                // console.log(longitude, latitude)
                // console.log("값:", Math.sqrt((Math.pow((content[i].coords.x - longitude), 2.0) + Math.pow((content[i].coords.y - latitude), 2.0)))) 
                setDistance(distance => [...distance, 
                    {
                        "id": `${content[i].id}`,
                        "distance": Math.sqrt((Math.pow((content[i].coords.x - longitude), 2.0) + Math.pow((content[i].coords.y - latitude), 2.0)))
                    }
                    ]
                    )
            }
        } 
        else{
            console.log("대기")
        }
       
        
    }, [setDistance, longitude, latitude])

    console.log({distance})

    return (
        <div>
            <DistanceRange distance={distance} />
        </div>
    );
}

export default DistanceCalculator;