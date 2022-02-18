public class SmartDevice {

    String marca, modelo, procesador, ram, capacidad, pantalla, camara;

    public SmartDevice(String marca, String modelo, String procesador, String ram, String capacidad, String pantalla, String camara) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = ram;
        this.capacidad = capacidad;
        this.pantalla = pantalla;
        this.camara = camara;
    }

    public SmartDevice() {

    }

    @Override
    public String toString() {
        return "SmartDevice{" +
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
