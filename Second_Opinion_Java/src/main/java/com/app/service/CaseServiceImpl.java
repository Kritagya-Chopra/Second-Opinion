package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.CaseDTO;

import com.app.entity.CaseEntity;
import com.app.entity.DiseaseEntity;
import com.app.entity.DoctorEntity;
import com.app.entity.PatientEntity;
import com.app.entity.SymptomEntity;
import com.app.repository.CaseRepository;
import com.app.repository.DiseaseRepository;
import com.app.repository.DoctorRepository;
import com.app.repository.PatientRepository;
import com.app.repository.SymptomRepository;

@Service
@Transactional
public class CaseServiceImpl implements CaseService {

	@Autowired
	CaseRepository caseRepository;

	@Autowired
	PatientRepository patientRepository;

	@Autowired
	DoctorRepository doctorRepository;

	@Autowired
	SymptomRepository symptomRepository;

	@Autowired
	DiseaseRepository diseaseRepository;

	@Autowired
	ModelMapper mapper;

	@Override
	public List<CaseDTO> getCasesByPatientId(Long id) {
		List<CaseEntity> entityCases = caseRepository.findAllByPatientId(id);
		List<CaseDTO> dtoCases = entityCases.stream().map((CaseEntity e) ->{
			CaseDTO cc = mapper.map(e, CaseDTO.class);
			cc.setPatientId(id);
			cc.setDoctorId(e.getDoctor().getId());
			return cc;
		})
				.collect(Collectors.toList());
		return dtoCases;
	}

	@Override
	public List<CaseDTO> getCasesByDoctorId(Long id) {

		List<CaseEntity> entityCases = caseRepository.findAllByDoctorId(id);
		List<CaseDTO> dtoCases = entityCases.stream().map((CaseEntity e) -> {
			CaseDTO cc =mapper.map(e, CaseDTO.class);
			cc.setDoctorId(id);
			cc.setPatientId(e.getPatient().getId());
			return cc;
			})
				.collect(Collectors.toList());
		return dtoCases;
	}

	@Override
	public CaseDTO createCase(CaseDTO c) {
		PatientEntity patient = patientRepository.findById(c.getPatientId())
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exists"));
		DoctorEntity doctor = doctorRepository.findById(c.getDoctorId())
				.orElseThrow(() -> new ResourceNotFoundException("Doctor not exists"));
		CaseEntity newCase = mapper.map(c, CaseEntity.class);
		newCase.setResponseTime(7);
		newCase.setOpenTime(LocalDateTime.now());
		newCase.setCloseTime(null);
		newCase.setStatus('P');
		doctor.addCase(newCase);
		patient.addCase(newCase);
		newCase.getSymptoms().addAll(symptomRepository.findAllById(c.getSymptomIds()));
		DiseaseEntity disease = diseaseRepository.findById(c.getDiseaseId()).orElseThrow(()->new ResourceNotFoundException("DISEASE NOT FOUND"));
		newCase.setDisease(disease);
		return mapper.map(caseRepository.save(newCase), CaseDTO.class);
	}

	@Override
	public boolean deleteCase(Long id) {
		try {
			CaseEntity myCase = caseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("CASE NOT FOUND"));
			myCase.setStatus('C');
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public CaseDTO getCasesById(Long id) {
		CaseEntity c = caseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Case Not Found"));
		CaseDTO cc = mapper.map(c,CaseDTO.class);
		cc.setDoctorId(c.getDoctor().getId());
		cc.setPatientId(c.getPatient().getId());
		return cc;
	}

	@Override
	public CaseDTO completeCase(Long id) {
		CaseEntity c = caseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Case Not Found"));
		c.setCloseTime(LocalDateTime.now());
		c.setStatus('C');
		DoctorEntity d = doctorRepository.findById(c.getDoctor().getId()).orElseThrow(() -> new ResourceNotFoundException("Doctor Not Found"));
		d.setAvgResponseTime((d.getAvgResponseTime()+c.getResponseTime())/2);
		return mapper.map(c, CaseDTO.class);
	}

}
