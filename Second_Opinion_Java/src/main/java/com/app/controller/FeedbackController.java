package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CaseDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.ResponseDTO;
import com.app.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	@Autowired
	FeedbackService feedbackService;
	
	@GetMapping("/{id}")
	public FeedbackDTO getFeedbackById(@PathVariable Long id)
	{
		return feedbackService.getFeedbackById(id);
	}
	
	@GetMapping("/patient/{id}")
	public List<FeedbackDTO> getFeedbackByPatientId(@PathVariable Long id)
	{
		return feedbackService.getFeedbackByPatientId(id);
	}
	
	@GetMapping("/doctor/{id}")
	public List<FeedbackDTO> getFeedbackByDoctorId(@PathVariable Long id)
	{
		return feedbackService.getFeedbackByDoctorId(id);
	}
	
	@PostMapping
	public ResponseDTO createFeedback(@RequestBody FeedbackDTO feedback)
	{
		ResponseDTO response = new ResponseDTO();
		FeedbackDTO newFeedback = feedbackService.createFeedback(feedback);
		if (newFeedback != null) {
			response.setData(newFeedback);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Feedback Created");
		} else {
			response.setData(newFeedback);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , Cant Create Feedback");
		}
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseDTO deleteFeedback(@PathVariable Long id)
	{
		ResponseDTO response  = new ResponseDTO();
		Boolean b = feedbackService.deleteFeeback(id);
		 if(b) {
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Feedback data successfully deleted");
		 }
		 else {
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error");
		 }
		return response;
	}
}
