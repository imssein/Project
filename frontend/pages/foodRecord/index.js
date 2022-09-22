import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import Diet from "../../components/diet";
import DietsLIstContainer from "../../components/diet/containers/DietsLIstContainer";
import Link from "next/link";
import CalendarComponent from "../../components/calendar";

function FoodRecord(props) {
  return (
    <MainLayout>
      <div className="px-9">
        <Head>
          <title>VeganPleasure | 식단기록</title>
        </Head>
        <div className="">
          <Diet />
        </div>
      </div>
    </MainLayout>
  );
}

export default FoodRecord;
