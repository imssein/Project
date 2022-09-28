import React, { useContext } from 'react';
import { AddressContext } from "../../../contexts/KaKaoMap"
import { StoreSearchProvider } from '../../../contexts/Store/search';
import GeolocationRecContainer from './GeolocationRecContainer';

function GeolocationContainer({ longitude, latitude }) {
    const address = useContext(AddressContext);

    return (
        <StoreSearchProvider params={encodeURIComponent(address[1])}>
            <GeolocationRecContainer title="내주변 식당 추천" />
        </StoreSearchProvider>
    );
}

export default GeolocationContainer;