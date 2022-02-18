package com.example.obspringbootapirest.entities;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "laptop")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marca;
    private String modelo;
    private Integer screenInch;
    private LocalDate buildDate;
    private boolean stock;

    public Laptop(){}

    public Laptop(Long id, String marca, String modelo, Integer screenInch, LocalDate buildDate, boolean stock) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.screenInch = screenInch;
        this.buildDate = buildDate;
        this.stock = stock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Integer getScreenInch() {
        return screenInch;
    }

    public void setScreenInch(Integer screenInch) {
        this.screenInch = screenInch;
    }

    public LocalDate getBuildDate() {
        return buildDate;
    }

    public void setBuildDate(LocalDate buildDate) {
        this.buildDate = buildDate;
    }

    public boolean isStock() {
        return stock;
    }

    public void setStock(boolean stock) {
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "Laptop{" +
                "id=" + id +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", screenInch=" + screenInch +
                ", buildDate=" + buildDate +
                ", stock=" + stock +
                '}';
    }
}

