package com.app.service;

import com.app.dto.DoctorDTO;
import com.app.entity.DoctorEntity;

public interface DoctorService {

	DoctorEntity getDoctor(Long id);
	DoctorEntity saveDoctor(Long userId, DoctorDTO doc);
	DoctorEntity updateDoctor(Long id, DoctorDTO doc);
	
	

}
