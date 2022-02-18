public class Main {
    public static void main(String[] args) {

        // Instanciamos 4 objetos de la clase Calculator.
        Calculator calculatorSuma = Calculator.getInstance();
        Calculator calculatorResta = Calculator.getInstance();
        Calculator calculatorMultiplica = Calculator.getInstance();
        Calculator calculatorDivide = Calculator.getInstance();

        // Imprimimos cada objeto al final de cada linea.
        System.out.println("La suma de 2 y 2 es: "
                + calculatorSuma.suma(2, 2)
                + " ----- Soy la calculadora: "
                + calculatorSuma);
        System.out.println("La resta de 2 y 2 es: "
                + calculatorResta.resta(2, 2)
                + " ----- Soy la calculadora: "
                + calculatorResta);
        System.out.println("La multiplicacion de 2 y 2 es: "
                + calculatorMultiplica.multiplica(2, 2)
                + " ----- Soy la calculadora: "
                + calculatorMultiplica);
        System.out.println("La division de 2 y 2 es: "
                + calculatorDivide.divide(2, 2)
                + " ----- Soy la calculadora: "
                + calculatorDivide);

        // Se puede comprobar que cada objetos apunta a la misma referencia del
        // objeto Calculator. De esta forma ahorramos espacio en memoria
        // y evitamos crear instancias innecesarias.
    }
}
