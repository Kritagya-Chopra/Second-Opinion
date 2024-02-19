package com.app.dto;

import com.app.enums.ERole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserRequestDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	private ERole role;
	private String userName;
	private String password;
}
