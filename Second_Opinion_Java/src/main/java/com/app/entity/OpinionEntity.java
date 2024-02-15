package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "opinions")
@Getter
@Setter
public class OpinionEntity extends BaseEntity {
	
	@Lob
	private String message;
	
	@Column(name = "opinion_time")
	private LocalDateTime opinionTime;
	
	@Column(name = "is_read")
	private boolean isRead;
	
	@Lob
	private byte[] document;
	
	@OneToOne
	@MapsId
	private CaseEntity myCase;
	
	
}
