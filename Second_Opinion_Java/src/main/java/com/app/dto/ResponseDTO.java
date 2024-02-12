package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDTO {
	private boolean status;
	private Object data;
	private String message;
	private String code;
	
}
