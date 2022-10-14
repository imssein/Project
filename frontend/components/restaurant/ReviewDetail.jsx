import React from 'react';
import { useContext } from 'react';
import { ReviewContext } from '../../contexts/Review';
import Feed from '../review/Feed';

function ReviewDetail({ params }) {
    const content = useContext(ReviewContext)

    return (
        <div>
            <Feed content={content} />
        </div>
    );
}

export default ReviewDetail;