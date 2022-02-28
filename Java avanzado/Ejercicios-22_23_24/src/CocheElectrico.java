public class CocheElectrico extends Coche{

    private String bateria;

    public CocheElectrico(String modelo, String marca, int año) {
        super(modelo, marca, año);
        this.bateria = "Litio";
    }

    public String getBateria() {
        return bateria;
    }

    public void setBateria(String bateria) {
        this.bateria = bateria;
    }

    public String toString() {
        return "COCHE" + "\r\n" +
                "Modelo: " + super.getModelo() + "\r\n" +
                "Marca: " + super.getMarca() + "\r\n" +
                "Año: " + super.getAño() + "\r\n" +
                "Bateria: " + bateria + "\r\n" +
                "Velocidad: " + super.getVelocidad() + "\r\n" +
                "--------------";
    }
}
