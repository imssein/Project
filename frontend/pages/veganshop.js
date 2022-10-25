import React from 'react';
import Head from 'next/head';
import MainLayout from "../components/common/MainLayout"
import ShopList from '../components/shop/components/ShopList';

function Veganshop(props) {
    return (
    
        <div className="">
            <MainLayout>
        <Head>
          <title>VEGIN | </title>
        </Head>
        <div className="mx-9 py-4">
        <ShopList />
       
        
        </div>
        </MainLayout>
    </div>
    );
}

export default Veganshop;