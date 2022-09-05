import Head from "next/head";
import MainLayout from "../components/common/MainLayout";
import Intro from "../components/intro/index";

export default function Home() {
  return (
    <div className="text-center">
      <Head>
        <title>VeganPleasure</title>
      </Head>
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <Intro />
        </MainLayout>
      </div>
    </div>
  );
}
