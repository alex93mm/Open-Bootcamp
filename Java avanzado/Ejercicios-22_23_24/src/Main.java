public class Main {

    public static void main(String[] args) {
//        Coche cocheGasoil = new CocheCombustible("Seat", "Leon", 1996);
//        Coche cocheLitio = new CocheElectrico("Tesla", "Alpha", 2020);
//        Coche cocheHibrido = new CocheHibrido("Seat", "Leon", 2013);

        Coche cocheGasoil = new Coche("Seat", "Leon", 1996);
        Coche cocheLitio = new Coche("Tesla", "Alpha", 2020);
        Coche cocheHibrido = new Coche("Seat", "Leon", 2013);

        cocheGasoil.acelerar();
        cocheGasoil.acelerar();
        cocheGasoil.acelerar();
        cocheGasoil.acelerar();

        cocheLitio.acelerar();
        cocheLitio.acelerar();
        cocheLitio.acelerar();
        cocheLitio.frenar();

        cocheHibrido.acelerar();
        cocheHibrido.acelerar();
        cocheHibrido.frenar();
        cocheHibrido.frenar();

        System.out.println(cocheGasoil);
        System.out.println(cocheLitio);
        System.out.println(cocheHibrido);
    }

}
