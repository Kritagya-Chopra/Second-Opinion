package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.PatientRequestDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.PatientEntity;
import com.app.repository.PatientRepository;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private PatientRepository patientRepository;

	@Override
	public ResponseDTO addPatient(PatientRequestDTO patient) {
		ModelMapper mapper = new ModelMapper();
		PatientEntity pat=mapper.map(patient, PatientEntity.class);
		PatientEntity addedPatient = patientRepository.save(pat);
		ResponseDTO responseDTO = new ResponseDTO();
		if(addedPatient==null) {
			responseDTO.setStatus(false);
			responseDTO.setCode("ERROR");
			responseDTO.setData(null);
			responseDTO.setMessage("Error in Adding Patient");
		}else {
			responseDTO.setStatus(true);
			responseDTO.setCode("OK");
			responseDTO.setData(addedPatient);
			responseDTO.setMessage("Patient Added Successfully");
		}
		return responseDTO;
	}
	
	
}
