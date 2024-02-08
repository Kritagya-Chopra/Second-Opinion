package com.app.entity;

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
import javax.persistence.OneToMany;

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
	@Column(nullable = false,length=50)
	private String title;
	@Column(nullable = false)
	private char status;
	@Lob
	private byte[] document;
	@Column(name = "open_time")
	private LocalDateTime openTime;
	@Column(name = "close_time")
	private LocalDateTime closeTime;
	@Column(name = "response_time")
	private LocalDateTime responseTime; 
	@OneToMany(mappedBy = "myCase",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<OpinionEntity> opinions=new ArrayList<>();
	@OneToMany(mappedBy="myCase")
	private List<NotificationEntity> notifications=new ArrayList<>();
	@ManyToMany
	private Set<SymptomEntity> symptoms=new HashSet<SymptomEntity>();
	
	@ManyToOne
	@JoinColumn(name="disease_id")
	private DiseaseEntity disease;
	
	@ManyToOne
	@JoinColumn(name="doctor_id")
	private DoctorEntity doctor;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	private PatientEntity patient;
	
	
	public void addNotification(NotificationEntity notification) {
		this.notifications.add(notification);
		notification.setMyCase(this);
	}
	
	public void removeNotification(NotificationEntity notification) {
		this.notifications.remove(notification);
		notification.setMyCase(null);
	}
	
	public void addOpinion(OpinionEntity o) {
		this.opinions.add(o);
		o.setMyCase(this);
	}
	
	public void removeOpinion(OpinionEntity o) {
		this.opinions.remove(o);
		o.setMyCase(null);
	}
	
	
	
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((openTime == null) ? 0 : openTime.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
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
		CaseEntity other = (CaseEntity) obj;
		if (openTime == null) {
			if (other.openTime != null)
				return false;
		} else if (!openTime.equals(other.openTime))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	
}
