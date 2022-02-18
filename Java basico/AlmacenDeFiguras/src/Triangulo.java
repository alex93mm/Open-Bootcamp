public class Triangulo {

    float base, altura, area;
    String color;

    public Triangulo(){
        this.base = 1;
        this.altura = 2;
        this.area = calcularArea();
        color = "rojo";
    }

    public Triangulo(int base, int altura){
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
        return "Triangulo{" +
                "base=" + base +
                ", altura=" + altura +
                ", area=" + area +
                ", color='" + color + '\'' +
                '}';
    }
}
