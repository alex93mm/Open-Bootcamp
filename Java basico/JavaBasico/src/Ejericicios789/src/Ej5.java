import java.util.ArrayList;
import java.util.LinkedList;

public class Ej5 {

    private static ArrayList<String> arrayList = new ArrayList<String>();
    private static LinkedList<String> linkedList = new LinkedList<String>();

    public static void main(String[] args) {

        fillArray();
        copyArray();
        printAll();

    }

    private static void fillArray(){

        arrayList.add("Libro");
        arrayList.add("Tarta");
        arrayList.add("Movil");
        arrayList.add("Casa");

    }

    private static void copyArray(){

        for(String word : arrayList){

            linkedList.add(word);

        }

    }

    private static void printAll(){

        for(String word : arrayList){

            System.out.println(word);

        }

        for(String word : linkedList){

            System.out.println(word);

        }

    }

}
