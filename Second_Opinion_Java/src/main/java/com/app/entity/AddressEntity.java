package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "address")
public class AddressEntity extends BaseEntity {
	@Column(nullable = false,length=50)
	private String street;
	@Column(nullable = false,length=30)
	private String city;
	@Column(nullable = false,length=30)
	private String state;
	@Column(nullable = false,length=30)
	private String country;
	@Column(nullable = false,length=10)
	private String zipcode;
	@Column(nullable = false,length=10)
	private String region;
	
	@OneToOne
	@MapsId
	private PatientEntity patient;
	
	@OneToOne
	@MapsId
	private DoctorEntity doctor;
}
