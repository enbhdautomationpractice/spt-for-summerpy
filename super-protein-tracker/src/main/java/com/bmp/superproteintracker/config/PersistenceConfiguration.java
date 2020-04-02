package com.bmp.superproteintracker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.autoconfigure.flyway.FlywayDataSource;

import javax.sql.DataSource;

@Configuration
public class PersistenceConfiguration {
	// @Bean tells Spring and Spring Boot that the returned value of this method
	// (which is a DataSource) needs to be set up and stored as a Spring Bean in
	// the Spring Context
	@Bean
	// @ConfigurationProperties tells the DataSourceBuilder to use the
	// connection and pulling properties located in the 'application.properties'
	// file where the properties begin with the 'spring.datasource' prefix
	@ConfigurationProperties(prefix="spring.datasource")
	// Use this as the default datasource:
	@Primary
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}

	// Configuration specific to the Flyway database
	@Bean
	@ConfigurationProperties(prefix="datasource.flyway")
	// Mark this DataSource to be used with Flyway
	@FlywayDataSource
	public DataSource flywayDataSource() {
		return DataSourceBuilder.create().build();
	}
}
