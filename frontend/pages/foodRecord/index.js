import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import Diets from "../../components/diets";
import { DietsProvider } from "../../contexts/Diets";

function FoodRecord(props) {
  return (
      <div className="h-full ">
      <MainLayout>
        <Head>
          <title>VeganPleasure | 식단기록</title>
        </Head>
        <div className="px-9 mb-36 ">
          <DietsProvider>
            <Diets />
          </DietsProvider>
        </div>
        </MainLayout>
      </div>
  );
}

export default FoodRecord;
