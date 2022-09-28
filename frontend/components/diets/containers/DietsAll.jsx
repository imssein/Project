import React, { useContext } from 'react';
import { DietsContext } from "../../../contexts/Diets";
import DeitsList from '../DietsList';

function DietsAll(props) {
    const content = useContext(DietsContext);

    return (
        <div>
            <DeitsList content={content} />
        </div>
    );
}

export default DietsAll;