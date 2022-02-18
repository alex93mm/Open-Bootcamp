import Controllers.AuthController;

public class Main {
    public static void main(String[] args) {
        AuthController controlador = new AuthController();
        //Pruebas de registro de usuarios (No repite emails)
        System.out.println(controlador.register("alejandro93mm@gmail.com", "marmachuela"));
        System.out.println(controlador.register("alejandro93mm@gmail.com", "mike"));
        System.out.println(controlador.register("elcharronegro@gmail.com", "abby"));
        //Pruebas de login de users
        System.out.println(controlador.login("rodrigodelavera@gmail.com","password"));
        System.out.println(controlador.login("alejandro93mm@gmail.com", "marmachuela"));
        System.out.println(controlador.login("alejandro93mm@gmail.com", "enriquito"));

    }
}
