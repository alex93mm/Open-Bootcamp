public class Ej1 {

    public static String reverse(String texto) {

        String textoInvertido = "";
        char[] caracteresTexto = texto.toCharArray();

        for (int index = caracteresTexto.length-1; index >= 0; index--){
            textoInvertido += caracteresTexto[index];
        }

        return textoInvertido;

    }

    public static void main(String[] args) {

        String texto = "odnum aloH";

        System.out.println("INVIERTO ESTE TEXTO");
        System.out.println("-------------------");
        System.out.println(texto);
        System.out.println(reverse(texto));

    }

}
