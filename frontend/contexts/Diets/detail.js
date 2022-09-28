import { createContext, useEffect, useState } from "react";
import { DIET } from "../../pages/config";
import authHeader from "../../services/auth-header";
import axios from "axios";

export const DietDetailContext = createContext({
    content: () => {},
});

export const DietDetailProvider = ({children, params}) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
      axios.get(`${DIET.DIETSLIST}/${params}`, {
        headers: authHeader()
      }).then((result) => {
              setContent(result.data)
          })
  }, [params, setContent]);    

    return(
        <DietDetailContext.Provider value={content} params={params}>
            {children}
        </DietDetailContext.Provider>
    )
}
