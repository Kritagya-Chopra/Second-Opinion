package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.app.enums.ERole;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class UserEntity extends BaseEntity{
	@Column(nullable = false)
	private ERole role;
	@Column(unique = true,nullable = false)
	private String userName;
	@Column(nullable = false)
	private String password;
	
}
