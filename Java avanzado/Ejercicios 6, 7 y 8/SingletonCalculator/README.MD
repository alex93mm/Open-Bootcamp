# PATRONES DE DISEÑO

Los patrones de diseño son soluciones habituales a problemas comunes, es decir, son estandares de programación para casos contretos de uso.

No se trata de pedazos de codigo como tal, sino mas bien una serie de conceptos que se aplican al codigo.


## CLASIFICACION DE LOS PATRONES 
 1. CREACIONALES. 
 > Proporcionan mecanismos de creacion de objetos que mejoran la flexibilidad y reutilizacion de código.
 2. ESTRUCTURALES. 
 > Explican como ensamblar objetos y clases en estructuras mas grandes, facilitando la compresion de objetos complejos.

### CREACIONALES

1. SINGLETON
    > Asegura la creacion de una única instancia para una clase. Solventa los problemas de acceso a un recurso compartido de tal manera que siempre devuelve el mismo recurso, y ademas proporciona un acceso global a determinados objetos, haciendolos accesibles desde cualquier punto del programa.
2. BUILDER
    > Permite construir objetos complejos paso a paso, permitiendo crear distintos tipos de un objeto empleando el mismo codigo en la construccion. Se evita de esta manera crear un constructor demasiado grande que a posteriori tendremos que llenar de sucesivos 'null' dando un aspecto confuso al codigo.
3. FACTORY
    > Proporciona una interfaz intermedia para crear objetos en una superclase, mientras permite a las subclases alterar del tipo de objetos que se crean. A grosso modo, este patron permite dar versatilidad al codigo, creando objetos de una clase desde otra clase generica. 
4. PROTOTYPE
    > Este patron permite copiar objetos existentes sin que el codigo dependa de sus clases. Es decir genera un proceso de clonado de la clase.


### ESTRUCTURALES

1. ADAPTER
    > Permite la colaboracion entre objetos con interfaces incompatibles. Como su propio nombre indica se crea una clase intermedia, denominada adaptador y cuya funcion es crear un nexo entre un objeto y otro. 
2. DECORATOR
    > Permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.
3. FACADE
    > Proporciona una interfaz simplificada a una biblioteca, un framework o cualquier otro grupo complejo de clases. De esta forma facilita la legibidad del codigo y esconde la complejidad del mismo.



