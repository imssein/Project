import React from 'react';
import { useRouter } from "next/router";
import ReviewForm from '../../components/review/Reviewform';


function WriteReview(props) {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);
    
    return (
        <div className="my-20 mx-5">
            <ReviewForm params={params} />
        </div>
    );
}

export default WriteReview;