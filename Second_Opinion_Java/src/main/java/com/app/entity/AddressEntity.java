package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Embeddable
public class AddressEntity {
	@Column(nullable = false,length=50)
	private String street;
	@Column(nullable = false,length=30)
	private String city;
	@Column(nullable = false,length=30)
	private String state;
	@Column(nullable = false,length=30)
	private String country;
	@Column(nullable = false,length=10)
	private String zipcode;
	@Column(nullable = false,length=10)
	private String region;

}
