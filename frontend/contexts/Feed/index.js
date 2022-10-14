import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { POST } from "../../config";

export const FeedContext = createContext({
    content: () => {},
});

export const FeedProvider = ({children}) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`${POST.POST_LIST}`)
            .then((result) => {
                setContent(result.data)
            })
    }, [setContent]);    

    return(
        <FeedContext.Provider value={content}>
            {children}
        </FeedContext.Provider>
    )
}
