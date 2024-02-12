package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ResponseDTO;
import com.app.dto.UserRequestDTO;
import com.app.entity.UserEntity;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public ResponseDTO addUser(UserRequestDTO u) {
		ModelMapper map = new ModelMapper();
		UserEntity user = map.map(u, UserEntity.class);
		UserEntity addedUser = userRepository.save(user);
		ResponseDTO resp  = new ResponseDTO();
		if(addedUser == null)
		{
			resp.setStatus(false);
			resp.setData(null);
			resp.setMessage("Some Error Occered, kindly Contact");
			resp.setCode("ERROR");
		}
		else
		{
		resp.setStatus(true);
		resp.setData(addedUser);
		resp.setMessage("User Added Successfully");
		resp.setCode("Ok");
		}
		return resp;
	}
	

}