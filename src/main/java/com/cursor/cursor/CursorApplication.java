package com.cursor.cursor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@SpringBootConfiguration
public class CursorApplication {

	public static void main(String[] args) {
		SpringApplication.run(CursorApplication.class, args);
	}

}
