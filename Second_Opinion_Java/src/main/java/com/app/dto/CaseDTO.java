package com.app.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.app.entity.DiseaseEntity;
import com.app.entity.DoctorEntity;
import com.app.entity.NotificationEntity;
import com.app.entity.OpinionEntity;
import com.app.entity.PatientEntity;
import com.app.entity.SymptomEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CaseDTO {
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long patientId;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long doctorId;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long diseaseId;
	@JsonProperty(access = Access.READ_ONLY)
	private Long Id;
	private String description;
	
	private String title;
	@JsonProperty(access = Access.READ_ONLY)
	
	private char status;
	
	private byte[] document;
	
	private LocalDateTime openTime;
	
	private LocalDateTime closeTime;
	
	private LocalDateTime responseTime; 
	
	@JsonProperty(access = Access.READ_ONLY)
	private List<OpinionEntity> opinions;
	@JsonProperty(access = Access.READ_ONLY)
	private List<NotificationEntity> notifications;
	
	
}
