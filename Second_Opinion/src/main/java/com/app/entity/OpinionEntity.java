package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "opinions")
@Getter
@Setter
public class OpinionEntity extends BaseEntity {
	private String message;
	@Column(name = "opinion_time")
	private LocalDateTime opinionTime;
	@Column(name = "is_read")
	private boolean isRead;
}
