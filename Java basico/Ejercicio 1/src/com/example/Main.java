package com.example;

public class Main {

    public static void main(String[] args) {

        // 1. Numericos

        // 1.1 Enteros
        byte varByte = 5;
        short varShort = 10;
        int varInt = 10;
        long varLong = 5L;

        // 1.2 Decimales
        float varFloat = 5.5f;
        double varDouble = 10.4d;

        // 2. Boolean
        boolean varTrue = true;

        // 3. Texto
        char varChar = 'a';
        String objString = "Alejandro";

        String toString = "Tipos de datos vistos: \n" +
                "byte: " + varByte + "\n" +
                "short: " + varShort + "\n" +
                "int: " + varInt + "\n" +
                "long: " + varLong + "\n" +
                "float: " + varFloat + "\n" +
                "double: " + varDouble + "\n" +
                "boolean: " + varTrue + "\n" +
                "char: " + varChar + "\n" +
                "String: " + objString
                ;

        System.out.println(toString);

    }

}
