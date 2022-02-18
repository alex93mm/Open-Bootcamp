package com.example.SpringEj4.controller;

import com.example.SpringEj4.entities.Laptop;
import com.example.SpringEj4.repository.LaptopRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LaptopController {

    private LaptopRepository repository;

    public LaptopController (LaptopRepository repository){
        this.repository = repository;
    }

    @GetMapping("/api/laptops")
    public List<Laptop> findAll(){
        return repository.findAll();
    }

}
