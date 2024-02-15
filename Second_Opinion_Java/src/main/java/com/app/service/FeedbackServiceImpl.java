package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.CaseDTO;
import com.app.dto.FeedbackDTO;
import com.app.entity.CaseEntity;
import com.app.entity.DoctorEntity;
import com.app.entity.FeedbackEntity;
import com.app.entity.PatientEntity;
import com.app.repository.DoctorRepository;
import com.app.repository.FeedbackRepository;
import com.app.repository.PatientRepository;

@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService{

	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	ModelMapper mapper;
	
	@Override
	public List<FeedbackDTO> getFeedbackByPatientId(Long id) {
		List<FeedbackEntity> entityFeedbacks = feedbackRepository.findAllByPatientId(id);
		List<FeedbackDTO> dtoFeebacks = entityFeedbacks.stream().map((FeedbackEntity e)->
			mapper.map(e, FeedbackDTO.class)
		).collect(Collectors.toList());
		return dtoFeebacks;
	}

	@Override
	public List<FeedbackDTO> getFeedbackByDoctorId(Long id) {
		List<FeedbackEntity> entityFeedbacks = feedbackRepository.findAllByDoctorId(id);
		List<FeedbackDTO> dtoFeebacks = entityFeedbacks.stream().map((FeedbackEntity e)->
			mapper.map(e, FeedbackDTO.class)
		).collect(Collectors.toList());
		return dtoFeebacks;
	}

	@Override
	public FeedbackDTO getFeedbackById(Long id) {
		
		return mapper.map(
				feedbackRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("FeedBack Not Found")),
				FeedbackDTO.class);
	}

	@Override
	public FeedbackDTO createFeedback(FeedbackDTO feedback) {
		PatientEntity patient = patientRepository.findById(feedback.getPatientId()).orElseThrow(()->new ResourceNotFoundException("Patient Not Found"));
		DoctorEntity doctor = doctorRepository.findById(feedback.getDoctorID()).orElseThrow(()->new ResourceNotFoundException("Doctor Not Found"));
		FeedbackEntity feedbackEntity = mapper.map(feedback, FeedbackEntity.class);
		patient.addFeedback(feedbackEntity);
		doctor.addFeedback(feedbackEntity);
		return mapper.map(feedbackRepository.save(feedbackEntity), FeedbackDTO.class);
	}

	@Override
	public Boolean deleteFeeback(Long id) {
		try {
			feedbackRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
