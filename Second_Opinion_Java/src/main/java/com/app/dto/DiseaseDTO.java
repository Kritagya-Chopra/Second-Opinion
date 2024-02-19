package com.app.dto;

import javax.persistence.Lob;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiseaseDTO {
	private String name;
	private String description;
	private int severity;
}
