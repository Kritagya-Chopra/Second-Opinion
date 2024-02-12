package com.app.entity;


import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "invoices")
@Getter
@Setter
public class InvoiceEntity extends BaseEntity {
	private LocalDateTime invoiceTime;
	private double totalAmount;
	@Column(name = "payment_status")
	private boolean paymentStatus;
	@Column(name = "payment_date")
	private LocalDateTime paymentTime;
	@OneToOne(cascade=CascadeType.ALL,orphanRemoval = true)
	@MapsId
	private CaseEntity myCase;
	
}
