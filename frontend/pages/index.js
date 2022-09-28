import Head from "next/head";
import Intro from "../components/intro/index";
import Nav from "../components/common/Nav";
import MainMenu from "../components/common/MainMenu";
export default function Home({ longitude, latitude }) {
  return (
    <div className="text-center bg-gray-4 h-screen">
      <Nav />
      <Head>
        <title>VeganPleasure</title>
      </Head>
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <Intro longitude={longitude} latitude={latitude} />
      </div>
      <MainMenu />
    </div>
  );
}
