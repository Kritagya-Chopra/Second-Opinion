package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.app.enums.ERole;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserEntity extends BaseEntity{
	
	private ERole role;
	private String username;
	private String password;
	private String email;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
}
