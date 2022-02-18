package com.example.CalculadoraTexto;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("CALCULADORA DE TEXTO");
        System.out.println("--------------------");
        System.out.println("Introduce texto de operacion...");

        String ejemplo = "sumale";

        String cadena = scanner.nextLine();

        String resultado = Util.ejecutarOperaciones(cadena);

        System.out.println(resultado);

    }

}
