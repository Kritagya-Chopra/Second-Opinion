package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FeedbackDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.TestimonialDTO;
import com.app.service.TestimonialService;

@RestController
@RequestMapping("/testimonials")
public class TestimonialController {
	
	@Autowired
	private TestimonialService testimonialService;
	
	@GetMapping("/{id}")
	public ResponseDTO getTestimonialById(@PathVariable Long id) {
		ResponseDTO response = new ResponseDTO();
		TestimonialDTO testdto = testimonialService.getTestimonialById(id);
		if(testdto!=null) {
			response.setData(testdto);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Testimonial data present");
		 }
		 else {
			 response.setData(testdto);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error , null testimonial found");
		 }
		return response;	
	}
	
	@GetMapping("/patient/{id}")
	public List<TestimonialDTO> getTestimonialsByPatientId(@PathVariable Long id) {
		
		return testimonialService.getTestimonialsByPatientId(id);	
	}
	
	@GetMapping("/all")
	public List<TestimonialDTO> getAllTestimonials(){
		return testimonialService.getAllTestimonials();
	}
	
	@PostMapping
	public ResponseDTO addTestimonials(@RequestBody TestimonialDTO t) {
		ResponseDTO response = new ResponseDTO();
		TestimonialDTO testdto = testimonialService.saveTestimonial(t);
		if(testdto!=null) {
			response.setData(testdto);
			response.setCode("OK");
			response.setMessage("New Testimony created");
			response.setStatus(true);
		}else {
			 response.setData(testdto);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error in creating testimony");
		}
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseDTO removeTestimonial(@PathVariable Long id)
	{
		ResponseDTO response  = new ResponseDTO();
		Boolean b = testimonialService.deleteTestimonial(id);
		 if(b) {
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Testimonial data successfully deleted");
		 }
		 else {
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error");
		 }
		return response;
	}
	
}
