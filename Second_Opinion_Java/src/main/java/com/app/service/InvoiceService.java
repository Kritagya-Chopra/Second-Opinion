package com.app.service;

import java.util.List;

import com.app.dto.InvoiceDTO;
import com.app.entity.InvoiceEntity;

public interface InvoiceService {

	InvoiceDTO getInvoice(Long id);

	InvoiceDTO saveInvoice(Long caseId, InvoiceDTO d);

	InvoiceEntity updateInvoice(Long id, InvoiceDTO d);

	Boolean deleteInvoice(Long id);

	List<InvoiceDTO> getInvoiceByPatientId(Long id);


}
