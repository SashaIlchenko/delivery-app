import React from 'react'
import { GoogleMap } from '@react-google-maps/api';
import { Wrapper } from './Map.styled'
const containerStyle = {
    width: '360px',
    height: '400px',
    borderRadius: '10px'
};
export const Map = ({ center }) => {
    const mapRef = React.useRef(undefined)
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])
    return < Wrapper >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    </ Wrapper >
}

