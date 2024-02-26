package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.DiseaseDTO;
import com.app.entity.DiseaseEntity;
import com.app.repository.DiseaseRepository;

@Service
@Transactional
public class DiseaseServiceImpl implements DiseaseService{

	@Autowired
	DiseaseRepository diseaseRepository;
	@Autowired
	ModelMapper mapper;
	@Override
	public List<DiseaseDTO> getAll() {
		return diseaseRepository.findAll().stream().map((DiseaseEntity e)->{
			return mapper.map(e, DiseaseDTO.class);
		}).collect(Collectors.toList()) ;
	}

}
