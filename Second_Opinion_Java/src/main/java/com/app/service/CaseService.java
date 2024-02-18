package com.app.service;

import java.util.List;

import com.app.dto.CaseDTO;
import com.app.entity.CaseEntity;

public interface CaseService {

	List<CaseDTO> getCasesByPatientId(Long id);

	List<CaseDTO> getCasesByDoctorId(Long id);

	CaseDTO createCase(CaseDTO c);

	boolean deleteCase(Long id);

	CaseDTO getCasesById(Long id);

}
