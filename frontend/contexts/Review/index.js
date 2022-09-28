import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { REVIEW } from "../../pages/config";

export const ReviewContext = createContext({
    content: () => {},
});

export const ReviewProvider = ({children, params}) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`${REVIEW.REVIEW}/${params}`)
            .then((result) => {
                setContent(result.data)
            })
    }, [params, setContent]);    

    return(
        <ReviewContext.Provider value={content} params={params}>
            {children}
        </ReviewContext.Provider>
    )
}
