package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "diseases")
@Getter
@Setter
public class DiseaseEntity extends BaseEntity {
	@Column(length = 30)
	private String name;
	@Lob
	private String description;
	private int severity;
}
