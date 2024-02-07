package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "languages")
public class LanguageEntity extends BaseEntity {

	@Column(nullable = false)
	private String name;
}
