package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "partners")
@Getter
@Setter
public class PartnerEntity extends BaseEntity {
	private String name;
	@Column(length = 50)
	private String contactEmail;
	@Lob
	private String logo;
	private String address;
}
