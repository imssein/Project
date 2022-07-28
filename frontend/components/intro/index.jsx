import React from 'react';
import SearchForm from './SearchForm';
import SeoulMap from '../seoulMap/SeoulMap';
import VegeInfo from './VegeInfo';
import Vegetarian from './Vegetarian';
import Menu from './Menu';
import Title from './Title';
function Intro(props) {
    return (
        <div className='px-4'>
            {/* 사이트설명 */}
            <Title title="맛있는 채식 한끼" description="지역을 클릭하면 해당 구의 채식 식당을 확인 할 수 있습니다."/>
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