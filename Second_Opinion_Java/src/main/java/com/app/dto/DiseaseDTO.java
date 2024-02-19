package com.app.dto;



import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiseaseDTO {
	private Long id;
	private String name;
	private String description;
	private int severity;
}
