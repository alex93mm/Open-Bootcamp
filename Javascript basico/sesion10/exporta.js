

//export const numero = 1256;
//export const miFuncion = () => 'hola';  


let nombre = 'Pepe';
const saludar = () => "¡Hola!"
const goodbye = () => "¡Adios!"
const porDefecto = () => "Soy la función por defecto"

//Si se realiza un export default, ese elemento será la exportación por defecto. 
//Sólo puede haber una exportación por defecto por fichero.

export { nombre };                       // Se crea un módulo y se añade number
export { saludar, goodbye as despedir }; // Se añade saludar y despedir al módulo
export { porDefecto as default };             // Se añade Clase al módulo (default)
    