package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
@Table(name = "feedbacks")
public class FeedbackEntity extends BaseEntity {
	@Lob
	private String review;
	@Column(nullable = false)
	private float rating;
	@Column(name="respone_time",nullable = false)
	private LocalDateTime responseTime;
	
	// Feedbacks *<--->1 Patient
	@ManyToOne
	@JoinColumn(name = "patient_id",nullable = false)
	private PatientEntity patient;
	
	// Feedbacks *<--->1 Doctor
	@ManyToOne
	@JoinColumn(name = "doctor_id",nullable = false)
	private DoctorEntity doctor;
	
}
