import React, { useContext, useState, useEffect} from 'react';
import { VegeTypeContext } from '../../../contexts/Diets/vegeType';
import { StoreSearchProvider } from "../../../contexts/Store/search"
import GeolocationRecContainer from './GeolocationRecContainer';

function DietsContainer() {
    const content = useContext(VegeTypeContext)

    return (
        <StoreSearchProvider params={encodeURIComponent(content)}>
            <GeolocationRecContainer title={`${content}` + " 음식을 찾으시나요?" } />
        </StoreSearchProvider>
    );
}

export default DietsContainer;