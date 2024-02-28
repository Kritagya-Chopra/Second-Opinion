package com.app.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestimonialDTO {

	
	private Long patientId;
	
	private String testimony;

	private int rating;
	
	private LocalDateTime createdAt;
	
}
