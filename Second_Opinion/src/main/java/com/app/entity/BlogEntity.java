package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "blogs")
public class BlogEntity extends BaseEntity {
	
	@Column(length = 50,nullable = false)
	private String title;
	
	@Column(nullable = false)
	@Lob
	private String content;
	
	@Column(name="publish_date", nullable=false)
	private LocalDateTime publishDate;
	
	@ManyToOne
	@JoinColumn(name = "doctor_id" , nullable = false)
	private DoctorEntity doctor;
}
