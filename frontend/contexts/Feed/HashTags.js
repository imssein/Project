import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { POST } from "../../config";

export const HashTagsContext = createContext({
    content: () => {},
});

export const HashTagsProvider = ({children, hashTag}) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`${POST.POST_LIST}?hashTag=${hashTag}`)
            .then((result) => {
                setContent(result.data)
                console.log(result.data)
            })
    }, [hashTag, setContent]);    

    return(
        <HashTagsContext.Provider value={content} hashTag={hashTag}>
            {children}
        </HashTagsContext.Provider>
    )
}
