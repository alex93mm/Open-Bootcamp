package com.example.SpringEj4.controller;

import com.example.SpringEj4.entities.Laptop;
import com.example.SpringEj4.repository.LaptopRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LaptopController {

    private LaptopRepository repository;

    public LaptopController (LaptopRepository repository){
        this.repository = repository;
    }

    // CRUD
    // findAll()
    @GetMapping("/api/laptops")
    @ApiOperation("Metodo para listar todos los elementos")
    public List<Laptop> findAll(){
        return repository.findAll();
    }

    // fingOneById()
    @GetMapping("/api/laptops/{id}")
    @ApiOperation("Metodo para listar un elemento segun su id")
    public ResponseEntity<Laptop> findOneById(@ApiParam("Clave primaria tipo Long") @PathVariable Long id){
        Optional<Laptop> laptopOpt = repository.findById(id);
        return laptopOpt.isPresent() ? ResponseEntity.ok(laptopOpt.get()) : ResponseEntity.notFound().build();
    }

    // create()
    @PostMapping("/api/laptops")
    @ApiOperation("Metodo para crear un elemento")
    public ResponseEntity<Laptop> create(@RequestBody Laptop laptop){
        return laptop.getId()!=null ? ResponseEntity.badRequest().build() : ResponseEntity.ok(repository.save(laptop));
    }

    // update()
    @PutMapping("/api/laptops")
    @ApiOperation("Metodo para actualizar un elemento")
    public ResponseEntity<Laptop> update(Laptop laptop){
        if(laptop.getId()==null){
            return ResponseEntity.badRequest().build();
        }
        if (!repository.findById(laptop.getId()).isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(repository.save(laptop));
    }

    // delete()
    @DeleteMapping("/api/laptops/{id}")
    @ApiOperation("Metodo para eliminar un elemento segun su id")
    public ResponseEntity<Laptop> deleteById(@ApiParam("Clave primaria tipo Long") @PathVariable Long id){
        if (!repository.findById(id).isPresent()){
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // deleteAll()
    @DeleteMapping("/api/laptops")
    @ApiOperation("Metodo para eliminar todos los elementos")
    // @ApiIgnore - Evita mostrar los metodos en Swagger
    public ResponseEntity<Laptop> deleteAll() {
        repository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}
