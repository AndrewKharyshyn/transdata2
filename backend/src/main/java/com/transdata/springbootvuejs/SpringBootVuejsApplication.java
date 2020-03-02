package com.transdata.springbootvuejs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootVuejsApplication {

//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/api/*").allowedOrigins("http://localhost:8080");
//            }
//        };
//    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootVuejsApplication.class, args);
    }
}
