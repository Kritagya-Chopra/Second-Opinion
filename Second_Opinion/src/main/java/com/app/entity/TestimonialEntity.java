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
@Table(name = "testimonials")
public class TestimonialEntity {
	@Lob
	@Column(nullable = false)
	private String testimony;
	@Column(nullable = false)
	private float rating;
	@Column(nullable = false,name="created_at")
	private LocalDateTime createdAt;
}
