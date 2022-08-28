import Head from "next/head";
import Intro from "../components/intro/index";

export default function Home() {
  return (
    <div className="text-center">
      <Head>
        <title>VeganPleasure</title>
      </Head>
      <Intro />
    </div>
  );
}
