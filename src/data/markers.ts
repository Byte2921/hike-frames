import type {MarkerData} from "../types/MarkerData.ts";
import pusztafalu from '../assets/pusztafalu.jpg';
import nagymilic from '../assets/nagy-milic.jpg';
import fuzer from '../assets/fuzer.jpg';

export const markers: MarkerData[] = [
    {
        geocode: [48.5520, 21.4680],
        popup: "Pusztafalu",
        image: pusztafalu
    },
    {
        geocode: [48.57665, 21.4581],
        popup: "Nagy-Milic",
        image: nagymilic
    },
    {
        geocode: [48.5432, 21.46876],
        popup: "Füzér vára",
        image: fuzer
    }
]