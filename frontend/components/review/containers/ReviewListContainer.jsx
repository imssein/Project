import React, { useContext } from 'react';
import { ReviewContext } from '../../../contexts/Review';
import List from '../components/List';

function ReviewListContainer( {params} ) {
    const content = useContext(ReviewContext)

    console.log("content", content)
    console.log("params", params)

    return (
        <div>   
            {content && content.map((item) => (
                <List item={item} key={item.id} params={params} />
            ))}
        </div>
    );
}

export default ReviewListContainer;