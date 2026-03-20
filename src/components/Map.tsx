import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import geodata from '../assets/map.json';
import {markers} from "../data/markers.ts";
import {createMarkers} from "./Marker.tsx";
import type {LatLngExpression} from "leaflet";

function Map() {

    const position: LatLngExpression = [48.5601844927077, 21.466251586318545];
    return (
        <>
            <MapContainer center={position} zoom={14.0} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={geodata}/>
                {createMarkers(markers)}
            </MapContainer>
        </>
    )
}

export default Map;