import React from 'react';
import MainLayout from '../../components/common/MainLayout';
import Head from 'next/head';
import { LikeProvider } from '../../contexts/Like';
import LikesListContainer from '../../components/likes/containers/LikesListContainer';
function LikeStore(props) {
    return (
        <MainLayout>
        <div className="h-full bg-gray-4">
          <div className="">
            <Head>
              <title>VEGIN | 맛있는 채식 한끼</title>
            </Head>
            <LikeProvider>
                <LikesListContainer />
            </LikeProvider>
         
          </div>
        </div>
      </MainLayout>
    );
}

export default LikeStore;