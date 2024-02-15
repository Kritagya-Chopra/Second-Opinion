package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DoctorDTO;
import com.app.dto.QualificationDTO;
import com.app.entity.AddressEntity;
import com.app.entity.DoctorEntity;
import com.app.entity.QualificationEntity;
import com.app.entity.UserEntity;
import com.app.repository.AddressRepository;
import com.app.repository.DoctorRepository;

import com.app.repository.QualificationRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	@Autowired
	DoctorRepository doctorRepository;	
	
	@Autowired
	UserRepository userRepository;
	
//	@Autowired
//	AddressRepository addressRepository;
	@Autowired
	private QualificationRepository qualificationRepository;
	@Autowired 
	ModelMapper mapper;

	@Override
	public DoctorDTO getDoctor(Long id) {
		DoctorEntity e= doctorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("DOCTOR NOT FOUND"));
		QualificationEntity qualification=qualificationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("NO QUALIFICATION PROVIDED"));
		QualificationDTO qDto=mapper.map(qualification,QualificationDTO.class);
		DoctorDTO dDto=mapper.map(e, DoctorDTO.class);
		dDto.setQualification(qDto);
		return dDto;
	}

	@Override
	public DoctorEntity saveDoctor(Long userId , DoctorDTO doc) {
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		UserEntity user = userRepository.findById(userId).orElseGet(()->new UserEntity());
		d.setUser(user);
		QualificationEntity qualification=mapper.map(doc.getQualification(), QualificationEntity.class);
		//AddressEntity address = mapper.map(doc.getAddress(), AddressEntity.class);
		//address.setId(userId);
		//addressRepository.save(address);
		DoctorEntity persistentDoctor = doctorRepository.save(d);
		qualification.setDoctor(persistentDoctor);
		qualificationRepository.save(qualification);
		
		return persistentDoctor;
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
			doctorRepository.deleteById(id);
			return true;
		}catch(Exception e){
			return false;
		}
	}
	
}
