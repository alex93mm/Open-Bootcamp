package com.example.CalculadoraTexto;


public class Calculator {

    private String operacion;
    private Integer operador1;
    private Integer operador2;
    private Integer resultado;

    public Calculator(String operacion, Integer operador1, Integer operador2){
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.operacion = operacion;
    }

    public Integer calcular() throws IllegalArgumentException{

        switch(operacion){
            case "suma":
                suma();
                break;
            case "resta":
                resta();
                break;
            case "multiplica":
                multiplica();
                break;
            case "divide":
                divide();
                break;
            default:
                throw new IllegalArgumentException("No se encontro una operacion valida...");
        }

        return resultado;

    }

    private void suma(){
        resultado = operador1 + operador2;
    }

    private void resta(){
        resultado = operador1 - operador2;
    }

    private void multiplica(){
        resultado = operador1 * operador2;
    }

    private void divide(){
        resultado = operador1 + operador2;
    }

}
