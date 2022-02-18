package com.example;

public class Saludo {

    private String saludo;

    public Saludo(){
        this.saludo = "Hola mundo";
    }

    public Saludo(String saludo){
        this.saludo = saludo;
    }

    public void imprimirSaludo(){
        System.out.println(saludo);
    }

}
