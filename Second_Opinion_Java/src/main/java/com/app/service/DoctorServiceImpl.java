package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DoctorDTO;
import com.app.entity.DoctorEntity;
import com.app.repository.DoctorRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	@Autowired
	DoctorRepository doctorRepository;	
	
	@Autowired 
	ModelMapper mapper;

	@Override
	public DoctorEntity getDoctor(Long id) {
		return doctorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("DOCTOR NOT FOUND"));
	}

	@Override
	public DoctorEntity saveDoctor(DoctorDTO doc) {
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		return doctorRepository.save(d);
	}

}
