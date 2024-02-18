package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.InvoiceDTO;
import com.app.entity.InvoiceEntity;
import com.app.repository.CaseRepository;
import com.app.repository.InvoiceRepository;

@Transactional
@Service
public class InvoiceServiceImpl implements InvoiceService {
	@Autowired
	InvoiceRepository invoiceRepository;
	
	@Autowired
	CaseRepository caseRepository;
	
	
	@Autowired
	ModelMapper mapper;

	@Override
	public InvoiceDTO getInvoice(Long id) {
		return mapper.map(invoiceRepository.findByMyCaseId(id), InvoiceDTO.class);
	}

	@Override
	public InvoiceDTO saveInvoice(Long caseId, InvoiceDTO o) {
		InvoiceEntity invoice = mapper.map(o, InvoiceEntity.class);
		invoice.setMyCase(caseRepository.findById(caseId).orElseThrow(()->new ResourceNotFoundException("CASE Not found")));
		return mapper.map(invoiceRepository.save(invoice), InvoiceDTO.class) ;
	}

	@Override
	public InvoiceEntity updateInvoice(Long id, InvoiceDTO o) {
		InvoiceEntity invoice = mapper.map(o, InvoiceEntity.class);
		invoice.setId(id);
		return invoiceRepository.save(invoice);
	}

	@Override
	public Boolean deleteInvoice(Long id) {
		try {
			invoiceRepository.deleteByMyCaseId(id);
			return true;
		}catch(Exception e){
			return false;
		}
	}

	//@Override
	//public List<InvoiceDTO> getInvoiceByPatientId(Long id) {
		//List<InvoiceEntity> invoices = invoiceRepository.findAllByCasePatientId(id);
		//return invoices.stream().map((InvoiceEntity i)->mapper.map(i, InvoiceDTO.class)).collect(Collectors.toList());
	//}

}
