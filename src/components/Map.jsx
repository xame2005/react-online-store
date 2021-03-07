import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const MapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaulCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyC7iixOm1LmHz9FD381ep7PEPoeTdXPCnA">
      <GoogleMap mapContainerStyle={MapStyles} zoom={9} center={defaulCenter}>
        <Marker position={defaulCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
