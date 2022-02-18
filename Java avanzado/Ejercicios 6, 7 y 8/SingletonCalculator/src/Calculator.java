public class Calculator {

    // Se crea un objeto de la propia clase, que sera el que contenga
    // la instancia de la misma.
    private static Calculator calculator;

    // El constructor privado sirve para que no se creen nuevos objetos
    // si ya existe otro.
    private Calculator(){}

    // Con el metodo GetInstance comprobamos si ya se ha creado una instancia
    // de la clase dentro de la variable calculator.
    // En caso de no existir se crea, y si existe se devuelve la misma.
    public static Calculator getInstance(){
        return calculator == null ? calculator = new Calculator() : calculator;
    }

    public int suma(int a, int b){
        return a + b;
    }

    public int resta(int a, int b){
        return a - b;
    }

    public int divide(int a, int b){
        return Math.round(a / b);
    }

    public int multiplica(int a, int b){
        return a * b;
    }
}
