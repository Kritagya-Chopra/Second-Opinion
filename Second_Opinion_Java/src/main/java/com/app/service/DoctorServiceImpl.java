package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DoctorDTO;
import com.app.entity.DoctorEntity;
import com.app.entity.LanguageEntity;
import com.app.entity.SpecializationEntity;
import com.app.entity.UserEntity;
import com.app.repository.DoctorRepository;
import com.app.repository.LanguageRepository;
import com.app.repository.SpecializationRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	@Autowired
	DoctorRepository doctorRepository;	
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	SpecializationRepository specializationRepository;
	
	@Autowired
	LanguageRepository languageRepository;
	
	@Autowired 
	ModelMapper mapper;

	@Override
	public DoctorDTO getDoctor(Long id) {
		DoctorEntity e= doctorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("DOCTOR NOT FOUND"));
		DoctorDTO dDto=mapper.map(e, DoctorDTO.class);
		return dDto;
	}

	@Override
	public DoctorDTO saveDoctor(Long userId , DoctorDTO doc) {
		SpecializationEntity specialization = specializationRepository.findById(doc.getSpecializationId()).orElseThrow(()-> new ResourceNotFoundException("Specialization not found"));
		UserEntity user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("USER NOT FOUND"));
		DoctorEntity d = mapper.map(doc, DoctorEntity.class);
		d.setUser(user);
		specialization.addDoctor(d);
		List<LanguageEntity> list = doc.getLanguages().stream().map((Long id )->
			languageRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("LANGUAGE NOT FOUND"))
		).collect(Collectors.toList());
		d.getLanguagesSpoken().addAll(list);
		return mapper.map(doctorRepository.save(d),DoctorDTO.class);
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

	@Override
	public List<DoctorDTO> getDoctorBySpecializationId(Long id) {
		
		return doctorRepository.findAllBySpecialization(id).stream().map((DoctorEntity e)->{
			return mapper.map(e, DoctorDTO.class);
		}).collect(Collectors.toList());
	
	}
	

}
