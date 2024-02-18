package com.app.service;

import java.util.List;

import com.app.dto.TestimonialDTO;

public interface TestimonialService {

	TestimonialDTO saveTestimonial(TestimonialDTO test);

	TestimonialDTO getTestimonialById(Long id);

	Boolean deleteTestimonial(Long id);

	List<TestimonialDTO> getTestimonialsByPatientId(Long id);

	List<TestimonialDTO> getAllTestimonials();

}
