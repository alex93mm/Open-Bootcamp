import java.io.*;
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> archivoUno = openFile("C:\\Users\\aleja\\IdeaProjects\\DiferenciadorFicheros\\src\\example1.txt");
        ArrayList<String> archivoDos = openFile("C:\\Users\\aleja\\IdeaProjects\\DiferenciadorFicheros\\src\\example2.txt");

        int lineasDiferentes = compareFiles(archivoUno, archivoDos);

        System.out.println("Los archivos tienen " + lineasDiferentes + " linea/s diferentes.");

    }

    private static ArrayList<String> openFile(String path){

        ArrayList<String> lineas = new ArrayList<String>();

        try {
            File archivo = new File(path);
            FileReader reader = new FileReader(archivo);
            BufferedReader buffer = new BufferedReader(reader);

            String linea;
            while((linea = buffer.readLine())!=null){
                lineas.add(linea);
            }
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return lineas;

    }

    private static int compareFiles(ArrayList<String> mainFile, ArrayList<String> comparedFile){

        int limit = mainFile.size();
        int differentLines = 0;

        if(mainFile.size() > comparedFile.size()){
            limit = comparedFile.size();
            differentLines = mainFile.size() - comparedFile.size();
        } else {
            differentLines = comparedFile.size() - mainFile.size();
        }

        for(int index = 0 ; index < limit; index++){

            if(!mainFile.get(index).equals(comparedFile.get(index))){ differentLines++;}

        }

        return differentLines;

    }

}
