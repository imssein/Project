import Head from 'next/head';
import React from 'react';
import MainLayout from '../../components/common/MainLayout';
import DiestList from '../../components/diets/containers/DiestList';
import { DietsProvider } from '../../contexts/Diets';

function Trend(props) {
    return (
        <div className='h-full bg-gray-4'>
            <MainLayout>
                <Head>
                <title>VeganPleasure | 채식 기록</title>
                </Head>
                <div className=''>
                <div className="text-center text-xl font-semibold text-green mb-11">나의 채식 현황 한 눈에 보기</div>
                    <DietsProvider>
                        <DiestList />
                    </DietsProvider>
                    {/* <VegeTrend /> */}
                </div>
            </MainLayout>        
        </div>
    );
}

export default Trend;