package com.app.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "patients")
public class PatientEntity extends BaseEntity {
	
	@Column(nullable = false,length=50,name="name")
	private String name;
	
	@Lob
	private byte[] photo;
	
	@Column(nullable = false,length=1)
	private char gender;
	
	@Column(nullable = false,length=14)
	private String contact;
	
	@Column(nullable = false,length=3,name="blood_group")
	private String bloodGroup;
	
	@Column(nullable = false)
	private float height;
	
	@Column(nullable = false)
	private float weight;
	
	@Column(nullable = false,name="date_of_birth")
	private LocalDate dateOfBirth;
	

	@OneToOne
	@MapsId
	private UserEntity user;

	// Patient 1<--->* cases
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CaseEntity> cases = new ArrayList<>();
	
	// Patient 1<--->* Testimonials
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<TestimonialEntity> testimonials = new ArrayList<TestimonialEntity>(); 
	
	// Patient 1<--->* Feedbacks
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FeedbackEntity> feedbacks = new ArrayList<>(); 
	
	//helper method (add)
	public void addFeedback(FeedbackEntity feedback) {
		this.feedbacks.add(feedback);
		feedback.setPatient(this);
	}
	
	//helper method (remove)
	public void removeFeedback(FeedbackEntity feedback) {
		this.feedbacks.remove(feedback);
		feedback.setPatient(null);
	}

	public void addCase(CaseEntity c) {
		this.cases.add(c);
		c.setPatient(this);
	}
	
	public void removeCase(CaseEntity c) {
		cases.remove(c);
		c.setPatient(null);
	}
	
	//helper method (add)
	public void addTestimonial(TestimonialEntity t) {
		this.testimonials.add(t);
		t.setPatient(this);
	}
	
	//helper method (remove)
	public void removeTestimonial(TestimonialEntity t) {
		this.testimonials.remove(t);
		t.setPatient(null);
	}

}
