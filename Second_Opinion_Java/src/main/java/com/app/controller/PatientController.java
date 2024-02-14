package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PatientDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.PatientEntity;
import com.app.service.PatientService;


@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@GetMapping("/{id}")
	public ResponseDTO index(@PathVariable Long id)
	{
		ResponseDTO response = new ResponseDTO();
		PatientDTO pat = patientService.getPatient(id);
		 if(pat!=null) {
			 response.setData(pat);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Patient data present");
		 }
		 else {
			 response.setData(pat);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error , null patient found");
		 }
		return response;
	}
	
	@PostMapping("/profile")
	public ResponseDTO addPatient(@RequestParam Long id , @RequestBody PatientDTO p)
	{
		ResponseDTO response = new ResponseDTO();
		PatientEntity pat = patientService.savePatient(id , p);
		 if(pat!=null) {
			 response.setData(pat);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Patient data present");
		 }
		 else {
			 response.setData(pat);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error , null patient found");
		 }
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseDTO deletePatient(@PathVariable Long id)
	{
		ResponseDTO response = new ResponseDTO();
		Boolean b = patientService.deletePatient(id);
		 if(b) {
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Patient data successfully deleted");
		 }
		 else {
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error");
		 }
		return response;
	}
	
	@PutMapping("/{id}")
	public ResponseDTO updatePatient(@PathVariable Long id,@RequestBody PatientDTO patdto) {
		ResponseDTO response = new ResponseDTO();
		PatientEntity pat = patientService.updatePatient(id, patdto);
		if(pat!=null) {
			response.setData(pat);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Patient data present");
		 }
		 else {
			 response.setData(pat);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error , null patient found");
		 }
		return response;
	}
}
