package com.app.dto;

import java.time.LocalDate;

import com.app.entity.AddressEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatientDTO {

	private String name;
	private String gender;
	private String contact;
	private LocalDate dateOfBirth;
	private String bloodGroup;
	private float height;
	private float weight;
	private byte[] photo;
	private AddressEntity address;

}
