package com.rohit.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "rohit")
public record RohitProperties(String adminUsername, String adminPassword, String jwtSecret, String uploadDir) {}
