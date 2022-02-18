public class Ejemplos {

    public static void main(String[] args) {

        suma(2, 15, 76);

    }

    public static void suma(int a, int b, int c){

        System.out.println("Cual es la raiz cuadrada de (2 + 15) / 76?");

        double resultado = (a + b) / c;

        float raiz = (float)Math.sqrt(resultado);

        System.out.println("La raiz es: " + raiz);

    }

}
