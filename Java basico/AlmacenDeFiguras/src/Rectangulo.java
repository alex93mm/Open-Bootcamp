public class Rectangulo {

    float base, altura, area;
    String color;

    public Rectangulo(){
        this.base = 1;
        this.altura = 2;
        this.area = calcularArea();
        color = "rojo";
    }

    public Rectangulo(int base, int altura){
        this.base = base;
        this.altura = altura;
        this.area = calcularArea();
        color = "azul";
    }

    private float calcularArea(){
        float resultado = base * altura;
        return resultado;
    }

    public float getArea() {
        return area;
    }

    @Override
    public String toString() {
        return "Rectangulo{" +
                "base=" + base +
                ", altura=" + altura +
                ", area=" + area +
                ", color='" + color + '\'' +
                '}';
    }
}
