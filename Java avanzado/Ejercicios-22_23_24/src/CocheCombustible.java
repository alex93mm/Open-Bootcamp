public class CocheCombustible extends Coche{

    private String combustible;

    public CocheCombustible(String modelo, String marca, int año) {
        super(modelo, marca, año);
        this.combustible = "Gasoil";
    }

    public String getCombustible() {
        return combustible;
    }

    public void setCombustible(String combustible) {
        this.combustible = combustible;
    }

    public String toString() {
        return "COCHE" + "\r\n" +
                "Modelo: " + super.getModelo() + "\r\n" +
                "Marca: " + super.getMarca() + "\r\n" +
                "Año: " + super.getAño() + "\r\n" +
                "Combustible: " + this.combustible + "\r\n" +
                "Velocidad: " + super.getVelocidad() + "\r\n" +
                "--------------";
    }
}
