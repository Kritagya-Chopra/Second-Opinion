package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "patients")
public class PatientEntity extends BaseEntity {
	@Column(nullable = false,length=50,name="name")
	private String name;
	@Column(nullable = false,length=1)
	private char gender;
	@Column(nullable = false,length=14)
	private String contact;
	@Column(nullable = false,length=3,name="blood_group")
	private char bloodGroup;
	@Column(nullable = false)
	private float height;
	@Column(nullable = false)
	private float weight;
	@Column(nullable = false,name="date_of_birth")
	private LocalDate dateOfBirth;
	
}
