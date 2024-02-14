package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DoctorDTO;
import com.app.dto.PatientDTO;
import com.app.entity.AddressEntity;
import com.app.entity.DoctorEntity;
import com.app.entity.PatientEntity;
import com.app.entity.UserEntity;
import com.app.repository.PatientRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	ModelMapper mapper;
	
	@Override
	public PatientDTO getPatient(Long id) {
		
		PatientEntity pat = patientRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("PATIENT NOT FOUND"));
		PatientDTO patDto=mapper.map(pat, PatientDTO.class);		
		return patDto;
	}
	
	@Override
	public PatientEntity savePatient(Long userId , PatientDTO pat) {
		PatientEntity p = mapper.map(pat, PatientEntity.class);
		UserEntity user = userRepository.findById(userId).orElseGet(()->new UserEntity());
		p.setUser(user);
		PatientEntity persistentPatient = patientRepository.save(p);
		return persistentPatient;
	}
	
	@Override
	public Boolean deletePatient(Long id) {
		try {
			patientRepository.deleteById(id);
			return true;
		}catch(Exception e){
			return false;
		}
	}

	@Override
	public PatientEntity updatePatient(Long id, PatientDTO pat) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
