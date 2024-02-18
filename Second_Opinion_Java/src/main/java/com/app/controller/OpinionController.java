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

import com.app.dto.OpinionDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.OpinionEntity;
import com.app.service.OpinionService;

@RequestMapping("/opinion")
@RestController
public class OpinionController {
	@Autowired
	OpinionService opinionService;
	

	@GetMapping("/{id}")
	public ResponseDTO index(@PathVariable Long id) {
		ResponseDTO response = new ResponseDTO();
		OpinionDTO opinion = opinionService.getOpinion(id);
		if (opinion != null) {
			response.setData(opinion);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Opinion Available");
		} else {
			response.setData(opinion);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , null opinion found");
		}
		return response;
	}

	@PostMapping("/add")
	public ResponseDTO addOpinion(@RequestParam Long caseId , @RequestBody OpinionDTO d) {
		ResponseDTO response = new ResponseDTO();
		OpinionDTO opinion = opinionService.saveOpinion(caseId , d);
		if (opinion != null) {
			response.setData(opinion);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Opinion Added");
		} else {
			response.setData(opinion);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , cant add opinion");
		}
		return response;
	}

	@PutMapping("/{id}")
	public ResponseDTO updateOpinion(@PathVariable Long id, @RequestBody OpinionDTO d) {
		ResponseDTO response = new ResponseDTO();
		OpinionEntity opinion = opinionService.updateOpinion(id , d);
		if (opinion != null) {
			response.setData(opinion);
			response.setStatus(true);
			response.setCode("OK");
			response.setMessage("Opinion Updated");
		} else {
			response.setData(opinion);
			response.setStatus(false);
			response.setCode("ERROR");
			response.setMessage("Some error , Cant update opinion");
		}
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseDTO deleteOpinion(@PathVariable Long id)
	{
		ResponseDTO response = new ResponseDTO();
		Boolean b = opinionService.deleteOpinion(id);
		 if(b) {
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Opinion data successfully deleted");
		 }
		 else {
			 response.setStatus(false);
			 response.setCode("ERROR");
			 response.setMessage("Some error");
		 }
		return response;
	}
	
	
}
