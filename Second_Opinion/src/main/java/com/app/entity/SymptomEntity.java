package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "symptoms")
@Getter
@Setter
public class SymptomEntity extends BaseEntity {
	@Column(length = 30)
	private String name;
	@Lob
	private String text;
}
