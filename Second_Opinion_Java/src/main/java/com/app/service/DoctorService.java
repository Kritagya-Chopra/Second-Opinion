package com.app.service;

import java.util.List;

import com.app.dto.DoctorDTO;
import com.app.entity.DoctorEntity;

public interface DoctorService {

	DoctorDTO getDoctor(Long id);
	DoctorDTO saveDoctor(Long userId, DoctorDTO doc);
	DoctorDTO updateDoctor(Long id, DoctorDTO doc);
	Boolean deleteDoctor(Long id);
	List<DoctorDTO> getDoctorBySpecializationId(Long id);
	
	

}
