public class SmartPhone extends SmartDevice{

    public SmartPhone(String marca, String modelo, String procesador, String ram, String capacidad, String pantalla, String camara) {

        super(marca, modelo, procesador, ram, capacidad, pantalla, camara);

    }

    public SmartPhone() {

    }

    @Override
    public String toString() {
        return "SmartPhone{" +
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
