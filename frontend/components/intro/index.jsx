import React from 'react';
import SearchForm from './SearchForm';
import SeoulMap from './SeoulMap';
import VegeInfo from './VegeInfo';
import Vegetarian from './Vegetarian';
import Recipe from './Recipe';
import Menu from './Menu';
function Intro(props) {
    return (
        <div className='py-10'>
            {/* 사이트설명 */}
            <div className='font-extrabold text-2xl text-lime-700 pb-4'>맛있는 채식 한끼</div>
            {/* 검색창 */}
            <SearchForm />
            {/* 지도 */}
            <SeoulMap />
            {/* 채식 타입 안내 */}
            <VegeInfo />
            {/* 채식타입에 따른 식당 조회 */}
            <Vegetarian />
            {/* 사이트 기능 */}
            <Menu />
        </div>
    );
}

export default Intro;