package com.rohit;

import com.rohit.config.RohitProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RohitProperties.class)
public class RohitApplication {
  public static void main(String[] args) {
    SpringApplication.run(RohitApplication.class, args);
  }
}
