package com.example.SpringEj4.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/saludo")
    public String HelloController(){
        return "Hola a todos.";
    }

}
