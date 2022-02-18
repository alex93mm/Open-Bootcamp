  /*  ##################### Módulos ES6
  
  > JS siempre ha tenido el problema de la organización del código, 
  sobre todo en aplicaciones grandes
  > Siempre se nos llenaban los archivos js de funciones y clases para organizar mejor el código de nuestras aplicaciones.
  > Pero tener todo en un fichero es poco eficiente, la mayoría de los lenguajes de programación se organizan en módulos, o sistemas modulares para organizar la información
  > Vimos en el curso HTML+CSS como SaSS nos ayudaba a organizar modularmente los archivos .scss que posteriormente se compilaban en un solo .css
  > En el lado del cliente esto se "solucionaba" con llamadas a sucesivos archivos .js pero con el problema de ser poco eficiente, sobrecargar al servidor y tener cuidado con el orden de carga
  > En ECMAScript ES6 aparecen los módulos ES o ESM, que permiten exportar e importar datos entre ditintos ficheros de JS, con las palabras clave:
  
    > export	
      Exporta datos (variables, funciones, clases...) 
      del fichero actual hacia otros que los importen.

    > import
      Importa datos (variables, funciones, clases...) desde un .js al que lo solicita.
       
      Ejemplo:
      > Creamos un fichero exporta.js
      > ojo ponemos type: module en el package.json

    */
        //Ejemplo 1
       // import { numero } from "./exporta.js";
        

        //Ejemplo 2
        //import { numero, miFuncion } from "./exporta.js";
        //console.log(numero);
        //console.log(miFuncion());

        //Ejemplo vemos la importación por defecto
        //import miImportacion from "./exporta.js";
        //console.log(miImportacion());
        //console.log(saludar()) // Esto va a producir un error, ver por qué
      
        //Ejemplo final
        /*
        import * as miImportacion from './exporta.js'
        console.log(miImportacion.saludar())
        console.log(miImportacion.despedir())
        //console.log(miImportacion.goodbye())
        console.log(miImportacion.default())
        console.log(miImportacion.nombre)
        */

        import './ejecuta.js' 