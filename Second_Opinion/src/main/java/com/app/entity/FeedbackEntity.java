package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
@Table(name = "feedbacks")
public class FeedbackEntity extends BaseEntity {
	@Lob
	private String review;
	@Column(nullable = false)
	private float rating;
	@Column(name="respone_time",nullable = false)
	private LocalDateTime responseTime;
	
}
