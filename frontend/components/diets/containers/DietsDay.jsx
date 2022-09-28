import React from 'react';
import { useContext } from 'react';
import { DayDietsContext } from '../../../contexts/Diets/DayDiets';
import Date from '../Date';
import DeitsList from '../DietsList';

function DietsDay({ day }) {
    const content = useContext(DayDietsContext)
    console.log(day)
    return (
        <div className="pb-36 bg-gray-4 px-9">
            <Date content={content} day={day} />
            <DeitsList content={content} />
        </div>
    );
}

export default DietsDay;