package com.app.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackDTO {
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long patientId;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long doctorID;
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String review;
	
	private int rating;
	
	private LocalDateTime responseTime;
	
}
