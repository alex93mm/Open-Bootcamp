public class Main {

    public static void main(String[] args) {

        System.out.println(saludarAlMundo());
        System.out.println(sumarNumeros(1,2,3,4,5));

    }

    /**
     * Funcion que genera un String, en este caso un saludo al mundo
     * @return String ('Hola Mundo')
     */
    public static String saludarAlMundo(){
        return "Hola mundo";
    }

    /**
     * Funcion que suma un conjunto de numeros pasados por parametro
     * Gracias al operador ... es posible incluir desde uno hasta n parametros
     * @param numeros Acepta tanto numero unico como array de numeros
     * @return resultado Devuelve el total del conjunto de valores pasados por parametro
     */
    public static int sumarNumeros(int ...numeros){

        int resultado = 0;

        for(int numero : numeros){
            resultado += numero;
        }

        return resultado;
    }

}
