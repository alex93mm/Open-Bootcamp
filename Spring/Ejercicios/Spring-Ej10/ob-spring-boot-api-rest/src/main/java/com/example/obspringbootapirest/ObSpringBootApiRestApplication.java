package com.example.obspringbootapirest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ObSpringBootApiRestApplication {

	public static void main(String[] args) {

		Logger log = LoggerFactory.getLogger(ObSpringBootApiRestApplication.class);

		SpringApplication.run(ObSpringBootApiRestApplication.class, args);
		log.info("PROGRAMA INICIALIZADO ... EJECUTANDO MAIN ...");
	}

}
