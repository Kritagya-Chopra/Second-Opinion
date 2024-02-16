package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class InvoiceDTO {
	
	private LocalDateTime invoiceTime;
	private double totalAmount;
	private boolean paymentStatus;	
	private LocalDateTime paymentTime;
}
