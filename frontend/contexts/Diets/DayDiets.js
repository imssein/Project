import { createContext, useEffect, useState } from "react";
import { DIET } from "../../pages/config";
import authHeader from "../../services/auth-header";
import axios from "axios";


export const DayDietsContext = createContext({
    content: () => {},
});

export const DayDietsProvider = ({children, search}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
      axios.get(`${DIET.DIETSLIST}?date=${search}`, {
        headers: authHeader()
      }).then((result) => {
              setContent(result.data)
          })
  }, [search, setContent]);    

    return(
        <DayDietsContext.Provider value={content} search={search}>
            {children}
        </DayDietsContext.Provider>
    )
}
