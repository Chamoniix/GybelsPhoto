package com.hugo.gybelsphotoback;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.hugo.gybelsphotoback.service.StorageService;

@SpringBootApplication
public class GybelsphotobackApplication {

	public static void main(String[] args) {
		SpringApplication.run(GybelsphotobackApplication.class, args);
	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			storageService.deleteAll();
			storageService.init();
		};
	}
}
