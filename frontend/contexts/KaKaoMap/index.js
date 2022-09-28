import { createContext, useEffect, useState } from "react";
import axios from "axios";

// 내위치 좌표 -> 주소, 자치구명
export const AddressContext = createContext({
    content: () => {},
});

export const AddressProvider = ({children, longitude, latitude}) => {
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("")

    useEffect(() => {
        if (longitude && latitude) {
          axios
            .get(
              `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
              {
                headers: {
                  Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
                },
              }
            )
            .then((result) => {
                // setContent(result.data.documents[0]);
              setAddress(result.data.documents[0].address_name);
              setDistrict(result.data.documents[0].region_2depth_name);
            });
        } else {
          console.log("geoclocation error")
        }
      }, [longitude, latitude, setAddress, setDistrict]);

      return(
        <AddressContext.Provider longitude={longitude} latitude={latitude} value={[address, district]} >
            {children}
        </AddressContext.Provider>
      )
     
}


