package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CaseDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.CaseEntity;
import com.app.service.CaseService;

@RestController
@RequestMapping("/case")
public class CaseController {

	@Autowired
	private CaseService caseService;

	@GetMapping("/patient/{id}")
	public List<CaseEntity> getCasesByPatientId(@PathVariable Long id) {
		return caseService.getCasesByPatientId(id);
	}

	@GetMapping("/doctor/{id}")
	public List<CaseEntity> getCasesByDoctorId(@PathVariable Long id) {
		return caseService.getCasesByDoctorId(id);
	}

	@PostMapping("/newCase")
	public ResponseDTO createCase(@RequestBody CaseDTO c) {
		ResponseDTO response = new ResponseDTO();
		CaseDTO newCase = caseService.createCase(c);
		if (newCase != null) {
			response.setData(newCase);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Case Created");
		} else {
			response.setData(newCase);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , Cant Create Case");
		}
		return response;
	}

	@DeleteMapping("/{id}")
	public ResponseDTO deleteCase(@PathVariable Long id)
	{
		ResponseDTO response  = new ResponseDTO();
		caseService.deleteCase(id);
		response.setData(null);
		response.setStatus(true);
		response.setCode("OK");
		response.setMessage("Case deleted");
		return response;
	}

}
