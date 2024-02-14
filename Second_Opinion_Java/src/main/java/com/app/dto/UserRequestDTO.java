package com.app.dto;

import com.app.enums.ERole;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserRequestDTO {
	private ERole role;
	private String userName;
	private String password;
}
