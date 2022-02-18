import java.io.*;
import java.util.ArrayList;

public class Ej8 {

    private static void copyFile(String fileIn, String fileOut) {

        File entrada = new File(fileIn);

        ArrayList<String> lineasArchivo = new ArrayList<String>();

        try (FileReader leerEntrada = new FileReader(entrada)) {

            BufferedReader archivoEntrada = new BufferedReader(leerEntrada);
            String linea;

            while((linea = archivoEntrada.readLine()) != null){

                lineasArchivo.add(linea);

            }


        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("Fichero de entrada no encontrado");
        } catch (IOException e) {
            e.printStackTrace();
        }

        File salida = new File(fileOut);

        try (FileWriter leerSalida = new FileWriter(salida)) {

            PrintWriter archivoSalida = new PrintWriter(leerSalida);

            for (String linea : lineasArchivo){
                archivoSalida.println(linea);
            }

            System.out.println("ARCHIVO COPIADO");

        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("Fichero de salida no encontrado");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {

        copyFile("C:\\Users\\aleja\\IdeaProjects\\Ejericicios789\\src\\texto1.txt", "C:\\Users\\aleja\\IdeaProjects\\Ejericicios789\\src\\texto2.txt");

    }

}
