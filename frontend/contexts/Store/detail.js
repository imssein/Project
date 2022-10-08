import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { STORE } from "../../config";

export const StoreDetailContext = createContext(
{
    content: () => {},
}
);

export const StoreDetailProvider = ({children, params}) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`${STORE.STORE}/${params}`)
            .then((result) => {
                setContent(result.data)
            })
    }, [params, setContent]);    

    return(
        <StoreDetailContext.Provider params={params} value={content}>
            {children}
        </StoreDetailContext.Provider>
    )
}

