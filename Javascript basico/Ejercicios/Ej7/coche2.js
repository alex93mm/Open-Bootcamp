export class Coche {
    constructor(peso, potencia, marca){
        var peso = peso;
        var potencia = potencia;
        var marca = marca;
    }

    get peso () {
        return this.peso;
    }

    get potencia () {
        return this.potencia;
    }

    get marca () {
        return this.marca;
    }

    set peso(peso){
        this.peso = peso;
    }

    set potencia(potencia){
        this.potencia = potencia;
    }

    set marca(marca){
        this.marca = marca;
    }

}