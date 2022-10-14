import React from 'react';
import MainLayout from '../../components/common/MainLayout';
import Head from 'next/head';
import { LikeProvider } from '../../contexts/Like';
import LikesListContainer from '../../components/likes/containers/LikesListContainer';

function LikeFeed(props) {
    return (
        <MainLayout>
        <div className="h-full bg-gray-4">
          <div className="">
            <Head>
              <title>VEGIN | 맛있는 채식 한끼</title>
            </Head>
            <LikeProvider type="post">
                <LikesListContainer type="post" />
            </LikeProvider>
         
          </div>
        </div>
      </MainLayout>
    );
}

export default LikeFeed;