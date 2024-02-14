package com.app.service;

import com.app.dto.DoctorDTO;
import com.app.entity.DoctorEntity;

public interface DoctorService {

	DoctorEntity getDoctor(Long id);
	DoctorEntity saveDoctor(DoctorDTO doc);
	
	

}
