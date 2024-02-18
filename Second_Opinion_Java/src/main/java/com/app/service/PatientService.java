package com.app.service;

import com.app.dto.PatientDTO;
import com.app.entity.PatientEntity;

public interface PatientService {

	PatientDTO getPatient(Long id);

	PatientEntity savePatient(Long userId, PatientDTO pat);

	PatientEntity updatePatient(Long id, PatientDTO pat);
	
	Boolean deletePatient(Long id);
	
}
