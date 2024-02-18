package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DoctorDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.DoctorEntity;
import com.app.service.DoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DoctorController {

	@Autowired
	DoctorService doctorService;

	@GetMapping("/{id}")
	public ResponseDTO index(@PathVariable Long id) {
		ResponseDTO response = new ResponseDTO();
		DoctorDTO doc = doctorService.getDoctor(id);
		if (doc != null) {
			response.setData(doc);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Doctor Available");
		} else {
			response.setData(doc);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , null doctor found");
		}
		return response;
	}

	@PostMapping("/profile")
	public ResponseDTO addDoctor(@RequestParam Long userId , @RequestBody DoctorDTO d) {
		ResponseDTO response = new ResponseDTO();
		DoctorDTO doc = doctorService.saveDoctor(userId , d);
		if (doc != null) {
			response.setData(doc);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Doctor Added");
		} else {
			response.setData(doc);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , cant add doctor");
		}
		return response;
	}

	@PutMapping("/{id}")
	public ResponseDTO updateDoctor(@PathVariable Long id, @RequestBody DoctorDTO d) {
		ResponseDTO response = new ResponseDTO();
		DoctorEntity doc = doctorService.updateDoctor(id , d);
		if (doc != null) {
			response.setData(doc);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Doctor Updated");
		} else {
			response.setData(doc);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , Cant update doctor");
		}
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseDTO deleteDoctor(@PathVariable Long id)
	{
		ResponseDTO response = new ResponseDTO();
		Boolean b = doctorService.deleteDoctor(id);
		 if(b) {
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Doctor data successfully deleted");
		 }
		 else {
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error");
		 }
		return response;
	}
}
