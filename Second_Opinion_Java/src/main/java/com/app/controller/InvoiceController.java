package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvoiceDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.InvoiceEntity;
import com.app.service.InvoiceService;

@RequestMapping("/invoice")
@RestController
public class InvoiceController {
	
	@Autowired
	InvoiceService invoiceService;
	
	@GetMapping("/{id}")
	public ResponseDTO index(@PathVariable Long id) {
		ResponseDTO response = new ResponseDTO();
		InvoiceDTO invoice = invoiceService.getInvoice(id);
		if (invoice != null) {
			response.setData(invoice);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Invoice Available");
		} else {
			response.setData(invoice);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , null invoice found");
		}
		return response;
	}
	
	@GetMapping("/patient/{id}")
	public ResponseDTO patientInvoice(@PathVariable Long id) {
		ResponseDTO response = new ResponseDTO();
		List<InvoiceDTO> invoices = invoiceService.getInvoiceByPatientId(id);
		if (invoices != null) {
			response.setData(invoices);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Invoice Available");
		} else {
			response.setData(invoices);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , null invoice found");
		}
		return response;
	}

	@PostMapping("/add")
	public ResponseDTO addInvoice(@RequestParam Long caseId , @RequestBody InvoiceDTO d) {
		ResponseDTO response = new ResponseDTO();
		InvoiceDTO invoice = invoiceService.saveInvoice(caseId , d);
		if (invoice != null) {
			response.setData(invoice);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Invoice Added");
		} else {
			response.setData(invoice);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , cant add invoice");
		}
		return response;
	}

	@PutMapping("/{id}")
	public ResponseDTO updateInvoice(@PathVariable Long id, @RequestBody InvoiceDTO d) {
		ResponseDTO response = new ResponseDTO();
		InvoiceEntity invoice = invoiceService.updateInvoice(id , d);
		if (invoice != null) {
			response.setData(invoice);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Invoice Updated");
		} else {
			response.setData(invoice);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , Cant update invoice");
		}
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseDTO deleteInvoice(@PathVariable Long id)
	{
		ResponseDTO response = new ResponseDTO();
		Boolean b = invoiceService.deleteInvoice(id);
		 if(b) {
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Invoice data successfully deleted");
		 }
		 else {
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error");
		 }
		return response;
	}
	
	
}
