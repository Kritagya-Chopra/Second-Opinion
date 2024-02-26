package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DiseaseDTO;
import com.app.service.DiseaseService;


@RestController
@RequestMapping("/disease")
@CrossOrigin
public class DiseaseController {
	
	@Autowired
	private DiseaseService diseaseService;
	
	@GetMapping
	public List<DiseaseDTO> allDiseases()
	{
		return diseaseService.getAll();
	}
}
