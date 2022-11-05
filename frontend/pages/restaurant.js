import React from 'react';
import MainLayout from '../components/common/MainLayout';
import Head from 'next/head';
import SearchMain from '../components/search/SearchMain';
import { AddressProvider } from '../contexts/KaKaoMap';
import FilterResult from '../components/filter/FilterResult';


function Restaurant({latitude, longitude}) {
 
    return (
        <MainLayout>
          <Head>
            <title>VeganPleasure | 내주변</title>
          </Head>
          <div className="px-4 bg-gray-4">
          <SearchMain />
          <div className="w-full">
          <AddressProvider longitude={longitude} latitude={latitude}>
            <FilterResult longitude={longitude} latitude={latitude} />
          </AddressProvider>
   
      </div>
          </div>
        </MainLayout>
    );
}

export default Restaurant;