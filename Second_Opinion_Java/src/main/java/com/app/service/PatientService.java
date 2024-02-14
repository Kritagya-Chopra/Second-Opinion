package com.app.service;

import com.app.dto.PatientRequestDTO;
import com.app.dto.ResponseDTO;

public interface PatientService {
	ResponseDTO addPatient(PatientRequestDTO patient);
}
