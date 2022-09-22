import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getAddressThunk } from "../../../redux/modules/location";
import Ex from "./Ex";
import useGeolocation from "react-hook-geolocation";

function Address() {
  const address = useSelector((state) => state.location.data.documents);
  const dispatch = useDispatch();
  const geolocation = useGeolocation();

  
  const getData = useCallback(
    () => {
    dispatch(getAddressThunk(geolocation.longitude, geolocation.latitude));
  }, [dispatch, geolocation.latitude, geolocation.longitude]);

//   console.log({getData, address})
  return <Ex getData={getData} address={address} />
}

export default Address;
