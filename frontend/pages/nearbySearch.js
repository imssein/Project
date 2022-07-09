import React from 'react';
import FilterLogo from '../components/searchfilter/FilterLogo';
import SearchForm from '../components/intro/SearchForm'
import DistrictLogo from '../components/searchfilter/DistrictLogo';
import DistanceLogo from '../components/searchfilter/DistanceLogo';
import Geolocation from "../components/nearbySearch/Geolocation";

function nearbySearch(props) {
    return (
        <div className='px-4'> 
            <SearchForm />
            <div className='flex justify-center'>
                <DistrictLogo />
                <DistanceLogo />
            </div>
            {/* 내위치 */}
            <Geolocation />
            {/* 식당 출력 */}
            
        </div>
    );
}

export default nearbySearch;