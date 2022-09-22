import React, { useState } from 'react';
import { useEffect } from 'react';

function Ex({address, getData}) {
    const [addr, setAddr] = useState("");
    const [district, setDistrict] = useState("");
    
    useEffect(() => {
        getData();
    }, [getData]);
    
    console.log(address)
   

    // console.log(addr)
    // console.log(district)
    // console.log(address[0])
    // setAddress(result.data.documents[0].address_name);
    // setDistrict(result.data.documents[0].region_2depth_name);
    return(
        <div>
           
        </div>
    )
}

export default Ex;