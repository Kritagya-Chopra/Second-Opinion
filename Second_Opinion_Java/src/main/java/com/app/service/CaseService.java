package com.app.service;

import java.util.List;

import com.app.dto.CaseDTO;
import com.app.entity.CaseEntity;

public interface CaseService {

	List<CaseEntity> getCasesByPatientId(Long id);

	List<CaseEntity> getCasesByDoctorId(Long id);

	CaseDTO createCase(CaseDTO c);

	void deleteCase(Long id);

}
