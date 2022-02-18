import java.util.ArrayList;

public class Ej6 {

    private static ArrayList<Integer> numbers = new ArrayList<Integer>();

    private static void fillArrayList(){

        for(int number = 1; number <= 10; number++){

            numbers.add(number);

        }

    }

    private static void deletePairs(){

        for(int index = 0; index <= numbers.size(); index++){

            if(numbers.get(index).intValue() % 2==0) {
                numbers.remove(numbers.get(index));
            }
        }

    }

    private static void printArray(){

        for(Integer number : numbers){

                System.out.println(number);

        }

    }

    public static void main(String[] args) {

        fillArrayList();
        printArray();
        deletePairs();
        printArray();

    }



}
