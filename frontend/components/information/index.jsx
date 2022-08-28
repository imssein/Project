import React from 'react';
import VegeInfoBtn from '../intro/VeganGuide';

function Information(props) {
    return (
        <div className='my-4'>
          <p className="font-semibold text-xl mt-8 mb-3">채식 가이드</p>
          <VegeInfoBtn />
        </div>
    );
}

export default Information;