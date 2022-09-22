import React from "react";
import FeedListContainer from "../../components/feedCOmponent/containers/FeedListContainer";
import Head from "next/head";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import MainLayout from "../../components/common/MainLayout";
import Nav from "../../components/common/Nav";
import SubMenu from "../../components/common/SubMenu";

function Feed(props) {
  return (
   <div className="bg-gray-4 h-full">
      <Head>
        <title>VeganPleasure | 피드</title>
      </Head>
       <Nav />
      <div className="">

        <FeedListContainer />
      </div>
      <SubMenu />
      </div>
  );
}

export default Feed;
