public class Ej2 {

    private static int[][] arrayBidimensional = new int[10][10];

    public static void main(String[] args) {

        llenarArray();
        mostrarArray();

    }

    private static void llenarArray(){

        for(int x = 0; x < 10; x++){

            for(int y = 0; y < 10; y++){

                arrayBidimensional[x][y] = (int) (Math.random()*5);

            }
        }

    }

    private static void mostrarArray(){

        for(int x = 0; x < 10; x++){

            for(int y = 0; y < 10; y++){

                System.out.println(arrayBidimensional[x][y]);

            }
        }

    }

}
