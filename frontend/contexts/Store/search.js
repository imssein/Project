import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { STORE } from "../../config";

export const StoreSearchContext = createContext({
    content: () => {},
});

export const StoreSearchProvider = ({children, params}) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`${STORE.STORE_QUERY}${params}`)
            .then((result) => {
                setContent(result.data)
            })
    }, [params, setContent]);    

    return(
        <StoreSearchContext.Provider value={content}>
            {children}
        </StoreSearchContext.Provider>
    )
}
