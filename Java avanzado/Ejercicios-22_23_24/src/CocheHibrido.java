public class CocheHibrido extends Coche{

    private String autonomia;

    public CocheHibrido(String modelo, String marca, int año) {
        super(modelo, marca, año);
        this.autonomia = "Hasta 26Km";
    }

    public String getAutonomia() {
        return autonomia;
    }

    public void setAutonomia(String autonomia) {
        this.autonomia = autonomia;
    }

    public String toString() {
        return "COCHE" + "\r\n" +
                "Modelo: " + super.getModelo() + "\r\n" +
                "Marca: " + super.getMarca() + "\r\n" +
                "Año: " + super.getAño() + "\r\n" +
                "Autonomia: " + this.autonomia + "\r\n" +
                "Velocidad: " + super.getVelocidad() + "\r\n" +
                "--------------";
    }

}
