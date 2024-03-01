package com.app.dto;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Lob;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class OpinionDTO {
	
	private String message;

	private LocalDateTime opinionTime;

	private boolean isRead;
	
	private String document;

}
