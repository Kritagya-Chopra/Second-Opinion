package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.OpinionDTO;
import com.app.entity.OpinionEntity;
import com.app.repository.CaseRepository;
import com.app.repository.OpinionRepository;

@Transactional
@Service
public class OpinionServiceImpl implements OpinionService {
	
	@Autowired
	OpinionRepository opinionRepository;
	
	@Autowired
	CaseRepository caseRepository;
	
	
	@Autowired
	ModelMapper mapper;

	@Override
	public OpinionDTO getOpinion(Long id) {
		return mapper.map(opinionRepository.findByMyCaseId(id), OpinionDTO.class);
	}

	@Override
	public OpinionDTO saveOpinion(Long caseId, OpinionDTO o) {
		OpinionEntity opinion = mapper.map(o, OpinionEntity.class);
		opinion.setMyCase(caseRepository.findById(caseId).orElseThrow(()->new ResourceNotFoundException("CASE Not found")));
		return mapper.map(opinionRepository.save(opinion), OpinionDTO.class) ;
	}

	@Override
	public OpinionEntity updateOpinion(Long id, OpinionDTO o) {
		OpinionEntity opinion = mapper.map(o, OpinionEntity.class);
		opinion.setId(id);
		return opinionRepository.save(opinion);
	}

	@Override
	public Boolean deleteOpinion(Long id) {
		try {
			OpinionEntity opinion =opinionRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Opinion not found"));
			opinion.setMyCase(null);
			opinionRepository.deleteByMyCaseId(id);
			return true;
		}catch(Exception e){
			return false;
		}
	}

}
