public class Ej7 {

    public static void main(String[] args) {

        try{

            System.out.println("Llamando a la funcion dividePorCero() ...");

            dividePorCero(9);

        } catch(ArithmeticException ae){

            System.out.println("Esto no puede hacerse");

        }

        System.out.println("DEMO DE CODIGO");

    }

    private static int dividePorCero(int divisor) throws ArithmeticException {

        return divisor / 0;

    }



}
