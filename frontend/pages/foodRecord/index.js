import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import Diet from "../../components/diet";

function FoodRecord(props) {
  return (
      <div className="h-full ">
      <MainLayout>
        <Head>
          <title>VeganPleasure | 식단기록</title>
        </Head>
        <div className="px-9 mb-36 ">
          <Diet />
        </div>
        </MainLayout>
      </div>
  );
}

export default FoodRecord;
