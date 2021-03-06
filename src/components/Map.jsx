import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const MapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaulCenter = {
    lat: 19.4267261,
    lng: -99.1718796,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyAFE2knAk0G94v7lam8dYvsnJfLw6iK59s">
      <GoogleMap mapContainerStyle={MapStyle} zoom={9} center={defaulCenter}>
        <Marker position={defaulCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
