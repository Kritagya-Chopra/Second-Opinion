/**
 * 
 */
package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "specializations")
public class SpecializationEntity extends BaseEntity {
	
	@Column(length = 30,nullable=false)
	private String name;
	
	
}
