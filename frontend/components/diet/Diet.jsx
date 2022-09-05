import React, {useState} from 'react';
import DietsLIstContainer from './containers/DietsLIstContainer';
import DayDiet from './DayDiet';
function Diet(props) {
    return (
        <div>
            {/* 일별 컴포넌트 */}
            <DietsLIstContainer />
        </div>
    );
}

export default Diet;