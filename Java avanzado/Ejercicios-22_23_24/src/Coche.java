public class Coche {
    private String modelo;
    private String marca;
    private int año;
    private int velocidad;

    public Coche(String modelo, String marca, int año){
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.velocidad = 0;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getAño() {
        return año;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public int getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(int velocidad) {
        this.velocidad = velocidad;
    }

    @Override
    public String toString() {
        return "COCHE" + "\r\n" +
                "Modelo: " + modelo + "\r\n" +
                "Marca: " + marca + "\r\n" +
                "Año: " + año + "\r\n" +
                "Velocidad: " + velocidad + "\r\n" +
                "--------------";
    }

    public void acelerar(){
        this.velocidad++;
    }

    public void frenar(){
        this.velocidad--;
    }
}
