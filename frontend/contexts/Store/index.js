import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { STORE } from "../../pages/config";

export const StoreContext = createContext({
    content: () => {},
});

export const StoreProvider = ({children}) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get(`${STORE.STORE}`)
            .then((result) => {
                setContent(result.data)
            })
    }, [setContent]);    

    return(
        <StoreContext.Provider value={content}>
            {children}
        </StoreContext.Provider>
    )
}

