import L from "leaflet";

export const createMarkerIcon = (image: string) => {
    return new L.Icon({
        className: "custom-marker",
        iconUrl: image,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
    })
}