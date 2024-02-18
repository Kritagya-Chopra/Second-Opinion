package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.app.entity.NotificationEntity;
import com.app.entity.OpinionEntity;

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
	private Long id;

	private String description;
	
	private String title;
	@JsonProperty(access = Access.READ_ONLY)
	
	private char status;
	
	private byte[] document;
	
	private LocalDateTime openTime;
	
	private LocalDateTime closeTime;
	@JsonProperty(access = Access.WRITE_ONLY)
	private LocalDateTime responseTime;
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Long> symptomIds;
	@JsonProperty(access = Access.READ_ONLY)
	private List<SymptomDTO> symptoms;
	
	@JsonProperty(access = Access.READ_ONLY)
	private OpinionEntity opinion;
	
	
}
