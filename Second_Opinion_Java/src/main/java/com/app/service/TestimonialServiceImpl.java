package com.app.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.FeedbackDTO;
import com.app.dto.TestimonialDTO;
import com.app.entity.DoctorEntity;
import com.app.entity.FeedbackEntity;
import com.app.entity.PatientEntity;
import com.app.entity.TestimonialEntity;
import com.app.repository.PatientRepository;
import com.app.repository.TestimonialRepository;

@Service
@Transactional
public class TestimonialServiceImpl implements TestimonialService {

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private TestimonialRepository testimonialRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Override
	public TestimonialDTO getTestimonialById(Long id) {
		TestimonialEntity t = testimonialRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Testimonial not found"));
		TestimonialDTO testdto = mapper.map(t, TestimonialDTO.class);		
		return testdto;
	}

	@Override
	public TestimonialDTO saveTestimonial(TestimonialDTO test) {
		PatientEntity patient = patientRepository.findById(test.getPatientId()).orElseThrow(()-> new ResourceNotFoundException("Patient not found"));
		TestimonialEntity testimonialEntity = mapper.map(test, TestimonialEntity.class);
		patient.addTestimonial(testimonialEntity);
		return mapper.map(testimonialRepository.save(testimonialEntity),TestimonialDTO.class);
	}
	
	@Override
	public Boolean deleteTestimonial(Long id) {
		try {
			testimonialRepository.deleteById(id);
			return true;
		}catch(Exception e) {
			return false;
		}
	}

	@Override
	public List<TestimonialDTO> getTestimonialsByPatientId(Long id) {
		List<TestimonialEntity> tEntityList = testimonialRepository.findAllByPatientId(id);
		List<TestimonialDTO> tDtoList = tEntityList.stream().map((TestimonialEntity t)->
		mapper.map(t, TestimonialDTO.class)).collect(Collectors.toList());
		return tDtoList;
	}


	@Override
	public List<TestimonialDTO> getAllTestimonials() {
		List<TestimonialEntity> tEntityList = testimonialRepository.findAll();
		List<TestimonialDTO> tDtoList = new ArrayList<TestimonialDTO>();
		for (TestimonialEntity testimonialEntity : tEntityList) {
			tDtoList.add(mapper.map(testimonialEntity, TestimonialDTO.class));
		}
		return tDtoList;
	}
	
	
}
