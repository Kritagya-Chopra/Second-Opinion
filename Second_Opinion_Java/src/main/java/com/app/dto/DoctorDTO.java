package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.entity.AddressEntity;
import com.app.entity.LanguageEntity;
import com.app.entity.QualificationEntity;
import com.app.entity.SpecializationEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorDTO {
	private String name;
	private String photo;
	private int yearsOfExperience;
	private float avgResponseTime;
	private float avgRating;
	private String licenseNo;
	private LocalDate licenseExpiry;
	private AddressEntity address;
	private QualificationEntity qualification;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long specializationId;
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Long> languages;
	@JsonProperty(access = Access.READ_ONLY)
	private SpecializationDTO specialization;
	@JsonProperty(access = Access.READ_ONLY)
	private List<LanguageDTO> languagesSpoken;
	
}
