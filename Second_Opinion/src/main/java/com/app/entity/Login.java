package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name="login")
public class Login extends BaseEntity{
	@Column(nullable = false,unique = true,length = 20)
	private String user;
	@Column(nullable = false,length = 20)
	private String password;
	
}
