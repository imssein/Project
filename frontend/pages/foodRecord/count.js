import Head from "next/head";
import MainMenu from "../../components/common/MainMenu";
import DietCount from "../../components/diets/DietCount";
import { DietsProvider } from "../../contexts/Diets";

function Count(props) {
  return (
    <div className="">
      <Head>
        <title>VeganPleasure | 식단기록</title>
      </Head>
      <div className="py-6 px-9">
        <DietsProvider>
         <DietCount />
        </DietsProvider>
        
      </div>
      <MainMenu />
    </div>
  );
}

export default Count;
