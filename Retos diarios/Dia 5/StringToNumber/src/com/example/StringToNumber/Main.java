package com.example.StringToNumber;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("INTRODUCE UN ARRAY DE ENTEROS");
        System.out.println("-----------------------------");
        System.out.println("Formato  [1, 2, 3, 4, 5, ...]");

        String cadena = scanner.nextLine();

        System.out.println(toInteger(cadena));
        System.out.println("FORMATO CORRECTO");

    }

    public static ArrayList<Integer> toInteger(String cadena) {

        ArrayList<Integer> numeros = new ArrayList<Integer>();

        String[] cadenaFormated = arrayFormat(cadena);

        for(int index=0; index < cadenaFormated.length ; index++){

            numeros.add(Integer.parseInt(cadenaFormated[index]));

        }

        return numeros;

    }

    public static String[] arrayFormat(String cadena) {

        if (cadena.startsWith("[") && cadena.endsWith("]") && cadena.contains(",")) {
            if(!cadena.matches(".*[a-zA-Z].*")){
                return cadena.replaceAll("\\[", "")
                        .replaceAll("\\]","")
                        .replaceAll(" ","")
                        .split(",");
            }
            else{
                throw new NumberFormatException("El formato es incorrecto: El array contiene letras");
            }
        } else {
            throw new NumberFormatException("El formato no es correcto: El array no esta bien formado");
        }

    }

}
