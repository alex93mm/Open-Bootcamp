import java.util.Vector;

public class Ej3 {

    public static void main(String[] args) {

        Vector vector = new Vector(10);
        vector.add("Uno");
        vector.add("Dos");
        vector.add("Tres");
        vector.add("Cuatro");
        vector.add("Cinco");

        vector.remove(1);
        // El vector se ha modificado con la primera eliminacion y
        // por tanto el elemento que estaba en 3er lugar pasa a estar en el 2do.
        vector.remove(1);

        System.out.println(vector);

    }

}
