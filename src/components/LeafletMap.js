/**
 * File: LeafletMap.js
 * Created by: Deepika Koti (@dkoti3355@conestogac.on.ca) on August 16, 2023
 * Contributors:
 *   - Deepika Koti (@dkoti3355@conestogac.on.ca) - Added LeafletMap Component to display country map with lat and long
 * Last Modified: August 16, 2023
 */

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ countryData }) => {
    const mapStyle = { width: '100%', height: '400px' };

    const latitude = countryData.latlng[0];
    const longitude = countryData.latlng[1];

    return (
        <MapContainer center={[latitude, longitude]} zoom={4} style={mapStyle}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]}></Marker>
        </MapContainer>
    );
};

export default LeafletMap;
