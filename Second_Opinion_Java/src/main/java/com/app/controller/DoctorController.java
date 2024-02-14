package com.app.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DoctorDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.DoctorEntity;
import com.app.service.DoctorService;


@RestController
@RequestMapping("/doctor")
public class DoctorController {
	
	@Autowired
	DoctorService doctorService;
	
	@GetMapping("/{id}")
	public ResponseDTO index(@PathVariable Long id)
	{
		ResponseDTO response = new ResponseDTO();
		DoctorEntity doc = doctorService.getDoctor(id);
		 if(doc!=null) {
			 response.setData(doc);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Doctor Available");
		 }
		 else {
			 response.setData(doc);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error , null doctor found");
		 }
		return response;
	}
	
	public ResponseDTO addDoctor(@RequestBody DoctorDTO d)
	{
		ResponseDTO response = new ResponseDTO();
		
		DoctorEntity doc = doctorService.saveDoctor(d);
		 if(doc!=null) {
			 response.setData(doc);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Doctor Available");
		 }
		 else {
			 response.setData(doc);
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error , null doctor found");
		 }
		return response;
	}
}
