package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "notifications")
@Getter
@Setter
public class NotificationEntity extends BaseEntity {
	@Column(length = 100 , nullable = false)
	private String message;
	@Column(nullable = false)
	private char type;
	@Column(nullable = false)
	private LocalDateTime time;
	@Column(name = "is_read")
	private boolean isRead;
}
