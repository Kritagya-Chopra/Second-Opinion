package com.app.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "doctors")
public class DoctorEntity extends BaseEntity {

	@Column(name = "name", length = 50,nullable = false)
	private String name;
	
	@Lob
	private byte[] photo;
	
	@Column(name="years_of_experience",length=2,nullable=false)
	private int yearsOfExperience;
	
	@Column(name="avg_response_time")
	private float avgResponseTime;
	
	@Column(name="avg_rating")
	private float avgRating;
	
	@Column(name="license_no",length=30,nullable=false)
	private String licenseNo;
	
	@Column(name="license_expiry",nullable=false)
	private LocalDate licenseExpiry;
	
	@OneToMany(mappedBy = "doctor" , cascade=CascadeType.ALL,orphanRemoval = true)
	private List<BlogEntity> blogs = new ArrayList<BlogEntity>();
	
	@ManyToMany(mappedBy = "doctors")
	private Set<LanguageEntity> languagesSpoken = new HashSet<LanguageEntity>();
	
	@OneToMany(mappedBy = "doctor" , cascade = CascadeType.ALL , orphanRemoval = true)
	private List<FeedbackEntity> feedbacks = new ArrayList<FeedbackEntity>();
	
	@ManyToOne
	@JoinColumn(name = "specialization_id")
	private SpecializationEntity specialization ;
	
	@OneToOne(cascade = CascadeType.ALL)
	@MapsId
	private UserEntity user;
	
	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CaseEntity> myCases = new ArrayList<CaseEntity>();
	
	public void addFeedback(FeedbackEntity feedback)
	{
		this.feedbacks.add(feedback);
		feedback.setDoctor(this);
	}
	
	public void removeFeedback(FeedbackEntity feedback)
	{
		this.feedbacks.remove(feedback);
		feedback.setDoctor(null);
	}
	
	//helper method
	public void addBlog(BlogEntity blog)
	{
		this.blogs.add(blog);
		blog.setDoctor(this);
	}
	
	//helper method
	public void removeBlog(BlogEntity blog)
	{
		this.blogs.remove(blog);
		blog.setDoctor(null);
	}
	
	public void addCase(CaseEntity c) {
		this.myCases.add(c);
		c.setDoctor(this);
	}
	
	public void removeCase(CaseEntity c) {
		myCases.remove(c);
		c.setDoctor(null);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((licenseNo == null) ? 0 : licenseNo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DoctorEntity other = (DoctorEntity) obj;
		if (licenseNo == null) {
			if (other.licenseNo != null)
				return false;
		} else if (!licenseNo.equals(other.licenseNo))
			return false;
		return true;
	}

	public void setUser(Long id , UserEntity user) {
		this.setId(id);
		this.user = user;
	}
	
	
	
}
