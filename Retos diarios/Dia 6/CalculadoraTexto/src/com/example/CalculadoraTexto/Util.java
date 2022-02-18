package com.example.CalculadoraTexto;

import java.util.HashMap;

public class Util {

    private static HashMap<String, Integer> numerosInt = new HashMap<String, Integer>();
    private static HashMap<Integer, String> unidades = new HashMap<Integer, String>();
    private static HashMap<Integer, String> decenas = new HashMap<Integer, String>();
    private static HashMap<Integer, String> centenas = new HashMap<Integer, String>();

    public static String[] obtenerOperacion(String[] operacionCompleta){

        String[] operacion = new String[5];

        for(int index=0; index<operacionCompleta.length; index++) {

            if (operacion[2] != null) {
                if (operacionCompleta[index].contains("suma") || operacionCompleta[index].contains("resta")
                        || operacionCompleta[index].contains("multiplica") || operacionCompleta[index].contains("divide")) {
                    operacion[3] = operacionCompleta[index]
                            .replaceAll("lo","")
                            .replaceAll("le","");
                } else if (numerosInt.containsKey(operacionCompleta[index])) {
                    if (operacion[4] == null) {
                        operacion[4] = operacionCompleta[index];
                        break;
                    }
                }
            }
            else if (operacionCompleta[index].contains("suma") || operacionCompleta[index].contains("resta")
                    || operacionCompleta[index].contains("multiplica") || operacionCompleta[index].contains("divide")) {
                operacion[0] = operacionCompleta[index];
            } else if (numerosInt.containsKey(operacionCompleta[index])) {
                if (operacion[1] == null) operacion[1] = operacionCompleta[index];
                else if (operacion[2] == null) operacion[2] = operacionCompleta[index];
            }

        }

        return operacion;
    }


    public static String ejecutarOperaciones(String cadena){

        fillHashMap();

        Integer resultado;
        Integer nuevoOperador;
        String[] operacionCompleta = cadena.split(" ");

        String[] operacion = obtenerOperacion(operacionCompleta);
        if (operacion[4]==null) {
            Calculator calculadora = new Calculator(operacion[0], toInteger(operacion[1]), toInteger(operacion[2]));
            resultado = calculadora.calcular();
        } else{
            Calculator calculadora = new Calculator(operacion[0], toInteger(operacion[1]), toInteger(operacion[2]));
            nuevoOperador = calculadora.calcular();
            Calculator calculadoraFinal = new Calculator(operacion[3], nuevoOperador, toInteger(operacion[4]));
            resultado = calculadoraFinal.calcular();
        }

        return "El resultado es: " + numberToString(resultado);

    }

    public static Integer toInteger(String operador){
        return numerosInt.get(operador);
    }

    public static String numberToString(Integer number){

        String resultado = "";

        Integer centena = Math.round(number/100);
        Integer decena = Math.round((number-(centena*100))/10);
        Integer unidad = Math.round(number-(centena*100)-(decena*10));

        if(centena!=0){
            if(centena==1 && decena==0 && unidad==0) return resultado + "cien";
            resultado += centenas.get(centena);
            if(decena!=0) resultado += " " + decenas.get(decena);
            if(unidad!=0) resultado += " " + unidades.get(unidad);
        } else if(decena!=0) {
                resultado += decenas.get(decena);
                if(unidad!=0) resultado += " " + unidades.get(unidad);
            } else resultado += unidades.get(unidad);

        return resultado;
    }

    private static void fillHashMap(){
        numerosInt.put("cero",0);
        numerosInt.put("uno",1);
        numerosInt.put("dos",2);
        numerosInt.put("tres",3);
        numerosInt.put("cuatro",4);
        numerosInt.put("cinco",5);
        numerosInt.put("seis",6);
        numerosInt.put("siete",7);
        numerosInt.put("ocho",8);
        numerosInt.put("nueve",9);

        centenas.put(1,"ciento");
        centenas.put(2,"doscientos");
        centenas.put(3,"trescientos");
        centenas.put(4,"cuatrocientos");
        centenas.put(5,"quinientos");
        centenas.put(6,"seiscientos");
        centenas.put(7,"setecientos");
        centenas.put(8,"ochocientos");
        centenas.put(9,"novecientos");

        decenas.put(1,"dieci");
        decenas.put(2,"veinte");
        decenas.put(3,"treinta");
        decenas.put(4,"cuarenta");
        decenas.put(5,"cincuenta");
        decenas.put(6,"sesenta");
        decenas.put(7,"setenta");
        decenas.put(8,"ochenta");
        decenas.put(9,"noventa");

        unidades.put(1,"uno");
        unidades.put(2,"dos");
        unidades.put(3,"tres");
        unidades.put(4,"cuatro");
        unidades.put(5,"cinco");
        unidades.put(6,"seis");
        unidades.put(7,"siete");
        unidades.put(8,"ocho");
        unidades.put(9,"nueve");
    }

}
