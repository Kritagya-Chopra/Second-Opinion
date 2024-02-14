package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.dto.UserRequestDTO;

import com.app.entity.UserEntity;
import com.app.service.LoginService;



@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {
	public LoginController() {
		System.out.println("in ctor");
	}
	@Autowired
	private LoginService loginService;
	@PostMapping
	public ResponseDTO validUser(@RequestBody UserRequestDTO user) {
		ResponseDTO response=new ResponseDTO();
		 UserEntity u=loginService.validateUser(user);
		 if(u!=null) {
			 response.setData(u);
			 response.setStatus(true);
			 response.setCode("OK");
			 response.setMessage("Valid User");
		 }
		 else {
			 response.setData(u);
			 response.setStatus(false);
			 response.setCode("NOT FOUND");
			 response.setMessage("Invalid User");
		 }
		 return response;
	}
}

