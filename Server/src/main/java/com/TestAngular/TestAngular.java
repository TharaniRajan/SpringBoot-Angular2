package com.TestAngular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;




@ComponentScan({"com.TestAngular.*"})
@SpringBootApplication
public class TestAngular extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(TestAngular.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(TestAngular.class, args);
	}
 }
