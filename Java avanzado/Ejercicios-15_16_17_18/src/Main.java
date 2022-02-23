import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {

    public static int division(int a, int b) throws ArithmeticException{
        return a / b;
    }

    public static void recorrerArray(int[] array) {
        try{
            System.out.println("En la posicion 9 del array tenemos el valor: " + array[9]);
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Ha ocurrido un error: " + e.getMessage());
        }
    }

    public static void leerFichero(String path) {
        try{
            File archivo = new File(path);
            FileReader reader = new FileReader(archivo);
            System.out.println("Fichero abierto correctamente");
        }
        catch(FileNotFoundException e){
            System.out.println("Ha ocurrido un error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
            try{
                System.out.println(division(10, 0));
            }
            catch(ArithmeticException e){
                System.out.println("Ha ocurrido un error: " + e.getMessage());
            }

            recorrerArray(new int[6]);

            leerFichero("/aqui");
    }

}
