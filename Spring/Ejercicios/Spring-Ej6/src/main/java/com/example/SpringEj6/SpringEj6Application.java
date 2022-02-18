package com.example.SpringEj4;

import com.example.SpringEj4.entities.Laptop;
import com.example.SpringEj4.repository.LaptopRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;

@SpringBootApplication
public class SpringEj6Application {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(SpringEj6Application.class, args);
		LaptopRepository repository = context.getBean(LaptopRepository.class);

		Laptop laptop1 = new Laptop(null, "Asus","Vivobook",14, LocalDate.of(1993,02,01),true);
		Laptop laptop2 = new Laptop(null, "hp","pavilion",16, LocalDate.of(1999,02,01),false);
		Laptop laptop3 = new Laptop(null, "lenovo","ideapad",17, LocalDate.of(2009,02,01),true);

		repository.save(laptop1);
		repository.save(laptop2);
		repository.save(laptop3);

		System.out.println("Programa inicializado");

	}

}
