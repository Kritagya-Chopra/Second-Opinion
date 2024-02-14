package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DoctorDTO;
import com.app.entity.DoctorEntity;
import com.app.entity.UserEntity;
import com.app.repository.DoctorRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	@Autowired
	DoctorRepository doctorRepository;	
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired 
	ModelMapper mapper;

	@Override
	public DoctorEntity getDoctor(Long id) {
		return doctorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("DOCTOR NOT FOUND"));
	}

	@Override
	public DoctorEntity saveDoctor(Long userId , DoctorDTO doc) {
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		UserEntity user = userRepository.findById(userId).orElseGet(()->new UserEntity());
		d.setUser(user);
		DoctorEntity persistentDoctor = doctorRepository.save(d);
		
		
		return persistentDoctor;
	}

	@Override
	public DoctorEntity updateDoctor(Long id , DoctorDTO doc) {
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		d.setId(id);
		return doctorRepository.save(d);
	}
	
}
