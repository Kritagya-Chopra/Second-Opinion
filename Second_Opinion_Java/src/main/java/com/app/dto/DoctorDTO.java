package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.entity.AddressEntity;
import com.app.entity.QualificationEntity;

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
	private AddressEntity address;
	private QualificationEntity qualification;
	private Long specializationId;
	private List<Long> languages;
	
}
