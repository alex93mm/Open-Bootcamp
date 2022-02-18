package Ejercicio2;

import java.util.Scanner;

    public class CalcularIVA {

        public static void main(String[] args) {

            Scanner input = new Scanner(System.in);

            System.out.println("Introduce precio para anadirle el IVA (Formato xx,xx)");

            double price = input.nextDouble();

            System.out.println("El precio con iva es: " + addIva(price));

        }

    static double addIva(double price) {

        return price * 1.21;

    }

}
