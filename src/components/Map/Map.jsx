import React, { useState } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import { Wrapper } from './Map.styled'
const containerStyle = {
    width: '360px',
    height: '400px',
    borderRadius: '10px'
};
const defaultCenter = {
    lat: -3.745,
    lng: -38.523
}
export const Map = () => {
    const [center, setCenter] = useState(() => JSON.parse(localStorage.getItem('coords')) || defaultCenter)
    const mapRef = React.useRef(undefined)
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
        setCenter(JSON.parse(localStorage.getItem('coords')))
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])
    return < Wrapper >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center || defaultCenter}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    </ Wrapper >
}

