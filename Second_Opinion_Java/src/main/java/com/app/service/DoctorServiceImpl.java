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
	public DoctorDTO getDoctor(Long id) {
		DoctorEntity e= doctorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("DOCTOR NOT FOUND"));
		DoctorDTO dDto=mapper.map(e, DoctorDTO.class);
		return dDto;
	}

	@Override
	public DoctorEntity saveDoctor(Long userId , DoctorDTO doc) {
		UserEntity user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("USER NOT FOUND"));
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		d.setUser(user);
		return doctorRepository.save(d);
	}

	@Override
	public DoctorEntity updateDoctor(Long id , DoctorDTO doc) {
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		d.setId(id);
		return doctorRepository.save(d);
	}

	@Override
	public Boolean deleteDoctor(Long id) {
		try {
			UserEntity user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("USER NOT FOUND"));
			user.setValid(false);
			user.setUserName(""+user.getId());
			return true;
		}catch(Exception e){
			return false;
		}
	}
	
}
