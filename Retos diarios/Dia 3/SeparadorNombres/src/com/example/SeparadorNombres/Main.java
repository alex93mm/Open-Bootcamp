package com.example.SeparadorNombres;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("INTRODUCE NOMBRE COMPLETO");
        System.out.println("-------------------------");
        String nombreCompleto = scan.nextLine();

        ArrayList<String> nombrePila = nombrePrincipal(nombreCompleto);

        ArrayList<String> apellidos = getApellidos(nombrePila, nombreCompleto);

        imprimirNombreCompleto(nombrePila, apellidos);

    }

    public static ArrayList<String> nombrePrincipal (String nombreCompleto){

        ArrayList<String> nombrePila = new ArrayList<>();
        String[] nombresSeparados = nombreCompleto.split(" ");

        for(int index = 0; index < nombresSeparados.length; index++){

            if(nombreExist(nombresSeparados[index])){
                nombrePila.add(nombresSeparados[index]);
            }

        }

        return nombrePila;

    }

    public static ArrayList<String> getApellidos(ArrayList<String> nombrePila, String nombreCompleto){

        ArrayList<String> apellidos = new ArrayList<>();

        for(String nombre : nombrePila){
            nombreCompleto = nombreCompleto.replaceAll(nombre,"");
        }

        String[] apellidoSinNombre = nombreCompleto.split(" ");

        for(int index = 0; index < apellidoSinNombre.length; index++){

            if(apellidoSinNombre[index]!=""){apellidos.add(apellidoSinNombre[index]);}

        }

        return apellidos;
    }

    public static boolean nombreExist(String nombre){

        ArrayList<String> nombres = new ArrayList<String>();
        File file = new File("src/com/example/SeparadorNombres/bbddNombres.txt");
        try (
                FileReader reader = new FileReader(file)) {
            BufferedReader bbddNombres = new BufferedReader(reader);
            String line;
            while((line = bbddNombres.readLine()) != null){
                nombres.add(line);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("ATENCION: NO SE HA ENCONTRADO EL FICHERO...");
        } catch (IOException e) {
            System.out.println("ERROR: FICHERO NO LEGIBLE...");
            e.printStackTrace();
        }

        return nombres.contains(nombre);

    }

    public static void imprimirNombreCompleto (ArrayList<String> nombres, ArrayList<String> apellidos){

        String nombrePila = "";

        for(String nombre : nombres){
            nombrePila += nombre + " ";
        }

        if(apellidos.size() < 1){
            System.out.println("NOMBRE: " + nombrePila);
        } else if(apellidos.size() == 1){
            System.out.println("NOMBRE: " + nombrePila);
            System.out.println("APELLIDO 1: " + apellidos.get(0));
        } else if(apellidos.size() >= 2){
            System.out.println("NOMBRE: " + nombrePila);
            System.out.println("APELLIDO 1: " + apellidos.get(0));
            System.out.println("APELLIDO 2: " + apellidos.get(1));
        }

    }

}
