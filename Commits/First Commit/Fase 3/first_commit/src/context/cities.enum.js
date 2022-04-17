import { SPAIN } from "./country.enum";

// ------------- ESPANA -----------------

const ALICANTE = 'Alicante';
const BARCELONA = 'Barcelona';
const CACERES = 'Caceres';
const SEVILLA = 'Sevilla';
const TOLEDO = 'Toledo';
const SEGOVIA = 'Segovia';
const CORDOBA = 'Cordoba';
const SALAMANCA = 'Salamanca';
const LUGO = 'Lugo';
const PONTEVEDRA = 'Pontevedra';
const LEON = 'Leon';
const BURGOS = 'Burgos';
const SANTIAGO = 'Santiago de compostela';
const MADRID = 'Madrid';

const SPAINCITIES = [
    ALICANTE,
    BARCELONA,
    CACERES,
    SEVILLA,
    TOLEDO,
    SEGOVIA,
    CORDOBA,
    SALAMANCA ,
    LUGO,
    PONTEVEDRA,
    LEON,
    BURGOS,
    SANTIAGO,
    MADRID
]

// --------------- PAIS 2 ------------


// --------------- PAIS 3 ------------

export const getCities = (country) => {
    switch(country){
        case SPAIN: 
            return SPAINCITIES;
        default:
            return [];
    }
}