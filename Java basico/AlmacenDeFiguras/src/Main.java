import java.util.Scanner;

public class Main {

    static Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {

        int operacion;
        boolean salir = false;

        Rectangulo rect = new Rectangulo();
        Circulo circ = new Circulo();
        Triangulo tria = new Triangulo();

        while(!salir){
            System.out.println("Elige el tipo de figura que quieres consultar:");
            System.out.println("1 - Rectangulo / 2 - Circulo / 3 - Triangulo / 4 - Comparar");

            operacion = entrada.nextInt();

            switch(operacion){
                case 1:
                    System.out.println(rect.toString());
                    break;
                case 2:
                    System.out.println(circ.toString());
                    break;
                case 3:
                    System.out.println(tria.toString());
                    break;
                case 4:
                    if(compararRectanguloTriangulo(rect, tria)) {
                        System.out.println("El rectangulo tiene un area mayor");
                    }
                    else {
                        System.out.println("El triangulo tiene un area mayor");
                    }
                    break;
                default:
                    salir = true;
                    System.out.println("Fin del programa");
                    break;
            }
        }

    }

    public static boolean compararRectanguloTriangulo(Rectangulo rect, Triangulo tria){
        return rect.getArea() > tria.getArea();
    }

    public static boolean compararRectanguloConLimite(Rectangulo rect, int lim){
        return rect.getArea() > lim;
    }

}
