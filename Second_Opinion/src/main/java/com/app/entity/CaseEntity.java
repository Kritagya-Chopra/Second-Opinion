package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cases")
@Getter
@Setter
public class CaseEntity extends BaseEntity {
	
	
	
	@Lob
	@Column(nullable = false)
	private String description;
	private char status;
	private byte[] document;
	@Column(name = "open_time")
	private LocalDateTime openTime;
	@Column(name = "close_time")
	private LocalDateTime closeTime;
	@Column(name = "response_time")
	private LocalDateTime responseTime;
}
