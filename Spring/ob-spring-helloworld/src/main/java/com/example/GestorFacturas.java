package com.example;

public class GestorFacturas {

    String nombre;
    Calculadora calculadora;

    public GestorFacturas(Calculadora calculadora, String nombre) {
        System.out.println("Ejecutando constructor FacturaCRUD");
        this.calculadora = calculadora;
        this.nombre = nombre;
    }
}
