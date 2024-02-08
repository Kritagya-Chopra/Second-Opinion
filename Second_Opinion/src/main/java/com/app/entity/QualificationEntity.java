package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "qualifications")
public class QualificationEntity extends BaseEntity {

	@Column(length = 30,nullable = false)
	private String name;
	
	@Column(length = 100,nullable = false)
	private String university;
	
	@Lob
	private byte[] document;
	
	@Column(name="license_no",length=30,nullable=false)
	private String licenseNo;
	
	@Column(name="license_expiry",nullable=false)
	private LocalDate licenseExpiry;
}
