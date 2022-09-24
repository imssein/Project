import React from "react";
import { useRouter } from "next/router";
import Detail from "../../../components/diet/Detail";
import DietDetailContainer from "../../../components/diet/containers/DietDetailContainer";
import MainLayout from "../../../components/common/MainLayout";
function DetailDiet(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
  <div>  
        <div className="md:px-20 h-full">
            <DietDetailContainer params={params} />
        </div>
     
    </div>
  );
}

export default DetailDiet;
