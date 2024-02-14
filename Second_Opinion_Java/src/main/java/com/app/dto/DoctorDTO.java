package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorDTO {
	
	private String name;
	
	private byte[] photo;
	
	private int yearsOfExperience;
	
	private LocalDateTime avgResponseTime;
	
	private float avgRating;
	
	private String licenseNo;
	
	private LocalDate licenseExpiry;
}
