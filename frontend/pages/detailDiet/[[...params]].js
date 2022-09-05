import React from "react";
import { useRouter } from "next/router";
import Detail from "../../components/diet/Detail";
import DietDetailContainer from "../../components/diet/containers/DietDetailContainer";
import MainLayout from "../../components/common/MainLayout";
function DetailDiet(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div className="md:px-20 px-4 py-4">
            <DietDetailContainer params={params} />
        </div>
      </MainLayout>
    </div>
  );
}

export default DetailDiet;
