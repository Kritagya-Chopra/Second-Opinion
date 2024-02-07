package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "doctors")
public class DoctorEntity extends BaseEntity {

	@Column(name = "name", length = 50,nullable = false)
	private String name;
	
	@Column(name="license_no",length=30,nullable=false)
	private String licenseNo;
	
	@Column(name="years_of_experience",length=2,nullable=false)
	private int yearsOfExperience;
	
	@Column(name="avg_response_time")
	private LocalDateTime avgResponseTime;
	
	@Column(name="avg_rating")
	private float avgRating;
	
	//FK
	private UserEntity user;
	
	
	
}
