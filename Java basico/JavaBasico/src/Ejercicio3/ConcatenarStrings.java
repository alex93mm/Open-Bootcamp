package Ejercicio3;

import java.util.ArrayList;
import java.util.Scanner;

public class ConcatenarStrings {

    public static void main(String[] args) {

        ArrayList<String> words = fillWords();

        writeWords(words);

    }

    static ArrayList<String> fillWords(){

        ArrayList<String> words = new ArrayList<String>();
        Scanner input = new Scanner(System.in);

        System.out.println("Introduce texto para concatenar: (Pulsa FIN para salir)");

        String word = input.nextLine();
        
        while(!word.equals("FIN")) {

            words.add(word);

            word = input.nextLine();

        }
        
        return words;
        
    }

    static void writeWords(ArrayList<String> words){

        String fullText = "";

        for(int i=0; i<words.size(); i++){

            fullText += words.get(i) + " ";

        }

        System.out.println("El texto introducido:");

        System.out.println(fullText);

    }

}
