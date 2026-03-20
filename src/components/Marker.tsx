import {Marker, Popup} from "react-leaflet";
import {createMarkerIcon} from "../util/iconFactory.ts";
import type {MarkerData} from "../types/MarkerData.ts";

function getMarker(marker: MarkerData) {
    return <Marker position={marker.geocode} icon={createMarkerIcon(marker.image)} key={marker.popup}>
        <Popup>
            {marker.popup}
            <img src={marker.image} style={{width: "300px"}} alt={"Image is missing!"}/>
        </Popup>
    </Marker>;
}

export function createMarkers(markers: MarkerData[]) {
    return <>
        {markers.map((marker) => getMarker(marker))}
    </>;
}