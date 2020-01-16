package com.cucmber.mainDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan("com.cucmber")
public class MainDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainDemoApplication.class, args);
	}

}
