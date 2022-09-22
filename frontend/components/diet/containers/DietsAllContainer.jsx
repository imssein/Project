import React, {useState, useEffect} from 'react';
import axios from 'axios';
import authHeader from '../../../services/auth-header';
import DietsAll from '../DietsAll';
function DietsAllContainer(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9090/v1/api/diets', {
            headers: authHeader()
        }).then(function(response) {
            console.log(response)
            setContent(response.data)
        })
    }, [setContent]);
    console.log(content)

    return (
        <div className='px-9'>
            <DietsAll content={content} />
        </div>
    );
}

export default DietsAllContainer;