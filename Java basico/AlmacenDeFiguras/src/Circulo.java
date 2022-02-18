public class Circulo {

    float radio, area;
    String color;

    public Circulo() {
        this.radio = 1;
        this.area = calcularArea();
        color = "rojo";
    }

    public Circulo(float radio){
        this.radio = radio;
        this.area = calcularArea();
        color = "azul";
    }

    private float calcularArea() {
        float resultado = (float)(Math.PI * (radio * radio));
        return resultado;
    }

    @Override
    public String toString() {
        return "Circulo{" +
                "radio=" + radio +
                ", area=" + area +
                ", color='" + color + '\'' +
                '}';
    }
}
