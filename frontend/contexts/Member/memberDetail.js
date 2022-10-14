import { createContext, useEffect, useState } from "react";
import authHeader from "../../services/auth-header";
import axios from "axios";
import { MEMBER  } from "../../config";

export const MemberDetailContext = createContext({
    content: () => {},
});

export const MemberDetailProvider = ({children}) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
      axios.get(`${MEMBER.MYPAGE}`, {
        headers: authHeader()
      }).then((result) => {
              setContent(result.data)
          })
  }, [setContent]);    

    return(
        <MemberDetailContext.Provider value={content}>
            {children}
        </MemberDetailContext.Provider>
    )
}
