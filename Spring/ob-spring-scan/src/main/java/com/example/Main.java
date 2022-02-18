package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        // CONCEPTO 1: Como obtener Bean de Spring
        // Opcion 1. Crear un objeto de forma normal
        //Calculadora service = new Calculadora();

        // Opcion 2. Recibir objeto de Spring
        Calculadora calculadora = (Calculadora) context.getBean("calculadora");
        String texto = calculadora.holaMundo();
        System.out.println(texto);

        // Se puede volver a obtener
        // OJO: se recupera el mismo objeto
        Calculadora calculadora2 = (Calculadora) context.getBean("calculadora");
        texto = calculadora2.holaMundo();
        System.out.println(texto);

        //CONCEPTO 2: Cargar un bean dentro de otro bean
        GestorFacturas gestorFactura = (GestorFacturas) context.getBean("gestorFacturas");
        System.out.println(gestorFactura.calculadora.holaMundo());

        //CONCEPTO 3: Scope o alcance
        // Los beans por defecto son singleton, se crea el objeto y se reutiliza para toda la aplicacion
        // podemos cambiarlo a scope="prototype" si queremos que se cree un nuevo objeto cada vez
        // (Prototype no se suele utilizar, se emplea el metodo de creacion de objetos tradicional)

    }

}
