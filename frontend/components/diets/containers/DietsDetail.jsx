import React from 'react';
import { useContext } from 'react';
import { DietDetailContext } from '../../../contexts/Diets/detail';
import Date from '../common/Date';
import Detail from '../Detail';

function DietsDetail() {
    const content = useContext(DietDetailContext);

    return (
        <div className='pt-6 px-9'>
            <Date day={content.createdTime} />
            <Detail content={content} />
        </div>
    );
}

export default DietsDetail;