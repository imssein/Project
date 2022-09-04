import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDistrictsThunk } from "../../../redux/modules/districts";
import District from "../District";
import DistrictMap from "../DistrictMap";

function DistrictContainers({ params }) {
  const districts  = useSelector((state) => state.districts.data);
  const dispatch = useDispatch();

  const getDistricts = useCallback(() => {
    dispatch(getDistrictsThunk({ params }));
  }, [dispatch, params]);


  return (
    <div>
      <DistrictMap districts={districts} getDistricts={getDistricts} />
      <District districts={districts} getDistricts={getDistricts} />
    </div>
  );
}

export default DistrictContainers;
