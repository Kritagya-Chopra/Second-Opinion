package com.app.dto;

import java.time.LocalDate;



import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorDTO {
	private String name;
	private byte[] photo;
	private int yearsOfExperience;
	private float avgResponseTime;
	private float avgRating;
	private String licenseNo;
	private LocalDate licenseExpiry;
	private QualificationDTO qualification;
	private AddressDTO address;
	
}
