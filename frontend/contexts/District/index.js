import { createContext, useEffect, useState } from "react";

// 자치구명 => 영어로
export const DistrictContext = createContext({
    content: () => {},
});

export const DistrictProvider = ({children, params}) => {
    const [district, setDistrict] = useState("");

    useEffect(() => {
        {
          datas.map((data) => {
            if (params === `${data.district}`) {
              setDistrict(`${data.value}`);
            }
          });
        }
    }, [setDistrict, params]);

    return(
        <DistrictContext.Provider value={district}>
            {children}
        </DistrictContext.Provider>
    )
}
