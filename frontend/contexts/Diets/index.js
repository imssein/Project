import { createContext, useEffect, useState } from "react";
import { DIET } from "../../pages/config";
import authHeader from "../../services/auth-header";
import axios from "axios";

export const DietsContext = createContext({
    content: () => {},
});

export const DietsProvider = ({children}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
      axios.get(`${DIET.DIETSLIST}`, {
        headers: authHeader()
      }).then((result) => {
              setContent(result.data)
          })
  }, [setContent]);    

    return(
        <DietsContext.Provider value={content}>
            {children}
        </DietsContext.Provider>
    )
}

