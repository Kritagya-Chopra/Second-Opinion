package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PatientRequestDTO;
import com.app.dto.ResponseDTO;
import com.app.service.PatientService;


@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@PostMapping
	public ResponseDTO addPatient(@RequestBody PatientRequestDTO patient) {
		
		return patientService.addPatient(patient);
	}
}
