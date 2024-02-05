package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.dto.UserRequestDTO;
import com.app.service.UserService;

@RequestMapping("/register")
@RestController
public class RegisterController {
	@Autowired
	private UserService userService;
	
	public ResponseDTO addUser(@RequestBody UserRequestDTO user)
	{
		return userService.addUser(user);
	}
}
