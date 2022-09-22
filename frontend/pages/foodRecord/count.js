import Head from "next/head";
import MainMenu from "../../components/common/MainMenu";
import DietCount from "../../components/diet/DietCount";

function Count(props) {
  return (
    <div className="">
      <Head>
        <title>VeganPleasure | 식단기록</title>
      </Head>
      <div className="py-6 px-9">
        <DietCount />
      </div>
      <MainMenu />
    </div>
  );
}

export default Count;
