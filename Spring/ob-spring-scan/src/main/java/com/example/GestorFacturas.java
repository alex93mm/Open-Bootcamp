package com.example;

import org.springframework.stereotype.Component;

@Component
public class GestorFacturas {

    //String nombre;
    Calculadora calculadora;

    public GestorFacturas(Calculadora calculadora) {
        System.out.println("Ejecutando constructor FacturaCRUD");
        this.calculadora = calculadora;
        //this.nombre = nombre;
    }
}
