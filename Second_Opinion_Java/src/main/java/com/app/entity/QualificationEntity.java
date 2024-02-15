package com.app.entity;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
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

	@OneToOne
	@MapsId
	private DoctorEntity doctor;
}
