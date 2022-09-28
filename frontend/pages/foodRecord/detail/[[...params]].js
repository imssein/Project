import React from "react";
import { useRouter } from "next/router";
import { DietDetailProvider } from "../../../contexts/Diets/detail";
import DietsDetail from "../../../components/diets/containers/DietsDetail";

function DetailDiet(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
  <div>  
        <div className="md:px-20 h-full">
          <DietDetailProvider params={params}>
              <DietsDetail params={params} />
          </DietDetailProvider>
        </div>
     
    </div>
  );
}

export default DetailDiet;
