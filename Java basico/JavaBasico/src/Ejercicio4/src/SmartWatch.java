public class SmartWatch extends SmartDevice{

    public SmartWatch(String marca, String modelo, String procesador, String ram, String capacidad, String pantalla, String camara) {

        super(marca, modelo, procesador, ram, capacidad, pantalla, camara);

    }

    public SmartWatch() {

    }

    @Override
    public String toString() {
        return "SmarWatch{" +
                "marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", procesador='" + procesador + '\'' +
                ", ram='" + ram + '\'' +
                ", capacidad='" + capacidad + '\'' +
                ", pantalla='" + pantalla + '\'' +
                ", camara='" + camara + '\'' +
                '}';
    }
}
