package com.example.obspringbootapirest.controller;

import com.example.obspringbootapirest.entities.Laptop;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LaptopControllerTest {

    private TestRestTemplate testRestTemplate;
    @Autowired
    private RestTemplateBuilder restTemplateBuilder;

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUp() {
        restTemplateBuilder = restTemplateBuilder.rootUri("http://localhost:"+port);
        testRestTemplate = new TestRestTemplate(restTemplateBuilder);
    }

    @Test
    void findAll() {
        ResponseEntity<Laptop[]> response =
                testRestTemplate.getForEntity("/api/laptops", Laptop[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void findOneById() {
        // Ya ha sido creado un Object Laptop por el metodo create()
        ResponseEntity<String> response =
                testRestTemplate.getForEntity("/api/laptops/1", String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        // Crear un libro y realizar una busqueda por id {NO FUNCIONA}
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        String json = """
                {
                    "marca": "Apple",
                    "modelo": "Macbook Pro",
                    "screenInch": 14,
                    "buildDate": "2019-12-01",
                    "stock": true
                }
                """;
        HttpEntity<String> request = new HttpEntity<>(json, headers);
        ResponseEntity<Laptop> responseCreate =
                testRestTemplate.postForEntity("/api/laptops", request,Laptop.class);
    // Ya existen 2 Laptops creados, este sera por tanto el Tercero
        assertEquals(3L, responseCreate.getBody().getId());

        ResponseEntity<String> responseId = testRestTemplate.getForEntity("/api/laptops/1", String.class);
        assertEquals(HttpStatus.OK, responseId.getStatusCode());
    }

    @Test
    void create() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        String json = """
                {
                    "marca": "Apple",
                    "modelo": "Macbook Pro",
                    "screenInch": 14,
                    "buildDate": "2019-12-01",
                    "stock": true
                }
                """;
        HttpEntity<String> request = new HttpEntity<>(json, headers);

        ResponseEntity<Laptop> response =
                testRestTemplate.postForEntity("/api/laptops", request, Laptop.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void update() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        String json = """
                {
                    "marca": "Apple",
                    "modelo": "Macbook Pro",
                    "screenInch": 14,
                    "buildDate": "2019-12-01",
                    "stock": true
                }
                """;
        HttpEntity<String> request = new HttpEntity<>(json, headers);

        ResponseEntity<Laptop> response =
                testRestTemplate.postForEntity("/api/laptops", request,Laptop.class);

        assertEquals("Apple", response.getBody().getMarca());

        String jsonNew = """
                {
                    "id": 1,
                    "marca": "Manzanoide",
                    "modelo": "Macbook Pro",
                    "screenInch": 14,
                    "buildDate": "2019-12-01",
                    "stock": true
                }
                """;
        HttpEntity<String> requestNew = new HttpEntity<>(jsonNew, headers);
        testRestTemplate.put("/api/laptops", requestNew, "", Laptop.class);

        ResponseEntity<String> responseNew =
                testRestTemplate.getForEntity("/api/laptops/1", String.class);

        assertEquals(HttpStatus.OK, responseNew.getStatusCode());
    }

    @Test
    void deleteById() {
        testRestTemplate.delete("/api/laptops/1");
        ResponseEntity<String> response =
                testRestTemplate.getForEntity("/api/laptops/1", String.class);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void deleteAll() {
        testRestTemplate.delete("/api/laptops");
        //ResponseEntity<String> response =
        //        testRestTemplate.getForEntity("/api/laptops/1", String.class);
        //assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        ResponseEntity<Laptop[]> response =
                testRestTemplate.getForEntity("/api/laptops", Laptop[].class);
        assertEquals(0, response.getBody().length);
    }
}